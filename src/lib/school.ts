export const SCHOOL = {
  name: "Little Genius International School",
  short: "Little Genius",
  tagline: "Where curiosity comes to class",
  addressLines: [
    "Ground Floor, Satsang Building",
    "Poonam Sagar Complex, Mira Road East",
    "Thane-401107",
  ],
  addressOneLine:
    "Ground Floor, Satsang Building, Poonam Sagar Complex, Mira Road East, Thane-401107",
  mapsLink: "https://maps.app.goo.gl/HVTdgubxpkWcaX996",
  mapEmbed:
    "https://www.google.com/maps?q=Ground+Floor+Satsang+Building+Poonam+Sagar+Complex+Mira+Road+East+Thane+401107&output=embed",
  phone: "96998 92032 / 74002 00817",
  phoneHref: "tel:+919699892032",
  email: "littlegeniusschool15@gmail.com",
  hours: "Monday – Saturday · 8:00 am – 4:00 pm",
  instagram: "https://www.instagram.com/littlegeniusschool_002003?igsi=MWxmYTdzcjFqaTZucA==",
  whatsapp:
    "https://wa.me/919699892032?text=Hello%20Little%20Genius%20International%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions.",
  chairman: "Prof. Rajesh A. Mishra",
  founded: "May 2014",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;
