export const SCHOOL = {
  name: "Little Genius International School",
  short: "Little Genius",
  tagline: "Where curiosity comes to class",
  addressLines: [
    "B Ground Floor, Satsang 1 Building, Wing A",
    "Poonam Sagar Complex, Mira Road East",
    "Mira Bhayandar, Maharashtra 401107",
  ],
  addressOneLine:
    "B Ground Floor, Satsang 1 Building, Wing A, Poonam Sagar Complex, Mira Road East, Mira Bhayandar, Maharashtra 401107",
  mapsLink: "https://maps.app.goo.gl/HVTdgubxpkWcaX996",
  mapEmbed:
    "https://www.google.com/maps?q=Little+Genius+International+School+Poonam+Sagar+Complex+Mira+Road+East+Mira+Bhayandar+Maharashtra+401107&output=embed",
  phone: "96998 92032 / 74002 00817",
  phoneHref: "tel:+919699892032",
  email: "littlegeniusschool15@gmail.com",
  hours: "Monday – Saturday · 8:00 am – 4:00 pm",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;
