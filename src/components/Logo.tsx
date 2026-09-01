import logoAsset from "@/assets/logo.avif.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Little Genius International School logo"
      width={160}
      height={160}
      className={cn("size-11 object-contain", className)}
    />
  );
}
