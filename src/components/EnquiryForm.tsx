import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { z } from "zod";

import { SCHOOL } from "@/lib/school";

const ENQUIRY_EMAIL = "utkarsharmy1@gmail.com";

const schema = z.object({
  name: z.string().trim().nonempty("Please enter your name").max(100),
  child: z.string().trim().nonempty("Please enter your child's name").max(100),
  cls: z.string().trim().nonempty("Please select a class"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  message: z.string().trim().max(1000).optional(),
});

const classes = ["Playgroup", "Nursery", "Jr. KG", "Sr. KG"];

export function EnquiryForm() {
  const [values, setValues] = useState({ name: "", child: "", cls: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setValues((p) => ({ ...p, [k]: v }));

  const compose = () =>
    [
      "Admission enquiry — Little Genius International School",
      `Parent name: ${values.name}`,
      `Child's name: ${values.child}`,
      `Class: ${values.cls}`,
      `Phone: ${values.phone}`,
      `Message: ${values.message || "-"}`,
    ].join("\n");

  const submit = (mode: "whatsapp" | "email") => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const issue of parsed.error.issues) e[String(issue.path[0])] = issue.message;
      setErrors(e);
      return;
    }
    setErrors({});
    const body = compose();
    const url =
      mode === "whatsapp"
        ? `https://wa.me/919699892032?text=${encodeURIComponent(body)}`
        : `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
            `Admission enquiry — ${values.child}`,
          )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field = "mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit("whatsapp");
      }}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="font-semibold">Parent name</span>
          <input
            className={field}
            value={values.name}
            maxLength={100}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your full name"
          />
          {errors['name'] && <span className="text-xs text-destructive">{errors['name']}</span>}
        </label>
        <label className="block text-sm">
          <span className="font-semibold">Child's name</span>
          <input
            className={field}
            value={values.child}
            maxLength={100}
            onChange={(e) => set("child", e.target.value)}
            placeholder="Child's full name"
          />
          {errors['child'] && <span className="text-xs text-destructive">{errors['child']}</span>}
        </label>
        <label className="block text-sm">
          <span className="font-semibold">Class</span>
          <select className={field} value={values.cls} onChange={(e) => set("cls", e.target.value)}>
            <option value="">Select a class</option>
            {classes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors['cls'] && <span className="text-xs text-destructive">{errors['cls']}</span>}
        </label>
        <label className="block text-sm">
          <span className="font-semibold">Phone</span>
          <input
            className={field}
            value={values.phone}
            maxLength={15}
            inputMode="tel"
            onChange={(e) => set("phone", e.target.value)}
            placeholder="10-digit mobile number"
          />
          {errors['phone'] && <span className="text-xs text-destructive">{errors['phone']}</span>}
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="font-semibold">Message (optional)</span>
          <textarea
            className={`${field} min-h-28 resize-y`}
            value={values.message}
            maxLength={1000}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Anything you would like the school to know"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="size-4" /> Send on WhatsApp
        </button>
        <button
          type="button"
          onClick={() => submit("email")}
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted"
        >
          <Mail className="size-4" /> Send by email
        </button>
      </div>

      {sent && (
        <p className="mt-4 text-sm text-muted-foreground">
          Your enquiry has been prepared — just press send in the app that opened. You can also call{" "}
          {SCHOOL.phone}.
        </p>
      )}
    </form>
  );
}
