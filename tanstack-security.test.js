import { describe, expect, test } from "bun:test";

const lock = Bun.JSON5.parse(await Bun.file(new URL("./bun.lock", import.meta.url)).text());
const manifest = await Bun.file(new URL("./package.json", import.meta.url)).json();

function versionsOf(name) {
  return Object.values(lock.packages)
    .map(([resolution]) => resolution)
    .filter((resolution) => resolution.startsWith(`${name}@`))
    .map((resolution) => resolution.slice(name.length + 1));
}

function isAtLeast(version, minimum) {
  const actual = version.split(".").map(Number);
  const required = minimum.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (actual[i] > required[i]) return true;
    if (actual[i] < required[i] || !Number.isInteger(actual[i])) return false;
  }
  return true;
}

describe("TanStack security dependency floors", () => {
  test("every resolved React Start is at least 1.168.60", () => {
    expect(isAtLeast(manifest.dependencies["@tanstack/react-start"], "1.168.60")).toBe(true);
    const versions = versionsOf("@tanstack/react-start");
    expect(versions.length).toBeGreaterThan(0);
    for (const version of versions) expect(isAtLeast(version, "1.168.60")).toBe(true);
  });

  test("every resolved Start server core is at least 1.169.39", () => {
    const versions = versionsOf("@tanstack/start-server-core");
    expect(versions.length).toBeGreaterThan(0);
    for (const version of versions) expect(isAtLeast(version, "1.169.39")).toBe(true);
  });

  test("Start and router plugins resolve their compatible TanStack dependency versions", () => {
    for (const [name, entry] of Object.entries(lock.packages)) {
      if (!name.startsWith("@tanstack/")) continue;
      for (const [dependency, requiredVersion] of Object.entries(entry[2].dependencies ?? {})) {
        if (!dependency.startsWith("@tanstack/") || !/^\d+\.\d+\.\d+$/.test(requiredVersion)) continue;
        expect(versionsOf(dependency)).toContain(requiredVersion);
      }
    }
  });
});