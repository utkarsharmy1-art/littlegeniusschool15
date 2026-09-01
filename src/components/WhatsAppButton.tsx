import { MessageCircle } from "lucide-react";

import { SCHOOL } from "@/lib/school";

export function WhatsAppButton() {
  return (
    <a
      href={SCHOOL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm sm:inline">WhatsApp enquiry</span>
    </a>
  );
}
