// All site content lives here — edit this file to update text, hours, menu or contacts.

export const site = {
  name: "North Side Coffee",
  tagline: "Specialty coffee, roasted in Morpeth",
  description:
    "Independent specialty coffee roastery in Morpeth, Northumberland. Small-batch roasting, ethically sourced beans and takeaway brews straight from the roaster.",
  // Replace with the final domain once it is connected (used for SEO / Open Graph).
  url: "https://northsidecoffeeroasters.com",
  established: 2020,

  contact: {
    phone: "07561 515751",
    phoneHref: "tel:+447561515751",
    email: "hello@northsidecoffee.co",
    instagram: "https://www.instagram.com/northsidecoffeeroasters/",
    instagramHandle: "@northsidecoffeeroasters",
    facebook: "https://www.facebook.com/northsidecoffeeroaster/",
    shop: "https://www.northsidecoffee.co/buy-coffee",
  },

  address: {
    line1: "Unit 3G, Coopies Field",
    line2: "Coopies Lane",
    city: "Morpeth",
    region: "Northumberland",
    postcode: "NE61 6JT",
    country: "GB",
  },
};

export const mapQuery = encodeURIComponent(
  `North Side Coffee Roasters, ${site.address.line1}, ${site.address.city} ${site.address.postcode}`,
);

// `open`/`close` in 24h "HH:MM"; omit both for closed days.
export type Day = { day: string; open?: string; close?: string; note?: string };

export const hours: Day[] = [
  { day: "Monday", open: "08:00", close: "20:00" },
  { day: "Tuesday", open: "08:00", close: "20:00" },
  { day: "Wednesday", open: "08:00", close: "20:00" },
  { day: "Thursday", open: "08:00", close: "20:00" },
  { day: "Friday", open: "08:00", close: "20:00" },
  { day: "Saturday", open: "08:00", close: "20:00" },
  { day: "Sunday" },
];

export type MenuItem = { name: string; notes: string; price: string };
export type MenuGroup = { title: string; items: MenuItem[] };

export const menu: MenuGroup[] = [
  {
    title: "Espresso blends",
    items: [
      { name: "Origin Espresso Blend", notes: "House espresso blend", price: "£12" },
      { name: "Altitude Espresso Blend", notes: "Espresso blend", price: "£12" },
      { name: "Half-Caff Blend", notes: "All the flavour, half the caffeine", price: "£13" },
    ],
  },
  {
    title: "Single origin classics",
    items: [
      { name: "Colombia", notes: "Single origin classic", price: "£12" },
      { name: "Brazil", notes: "Single origin classic", price: "£12" },
      { name: "Costa Rica", notes: "Single origin classic", price: "£12" },
      { name: "Peru Mendoza", notes: "Single origin classic", price: "£13" },
      { name: "Sumatra Gayo", notes: "Single origin classic", price: "£13" },
      { name: "Guatemala Monte Flor", notes: "Single origin", price: "£13" },
    ],
  },
  {
    title: "Speciality lots",
    items: [
      { name: "Colombia Suarez", notes: "Community lot", price: "£14" },
      { name: "Ethiopia Guji Kercha", notes: "Wine process", price: "£17" },
      { name: "Finca Casa De Piedra", notes: "Costa Rica · Red Catuai anaerobic", price: "£17" },
      { name: "Bisal Munti Estate", notes: "Karnataka, India", price: "£17" },
      { name: "La Esperanza Sweet Valley", notes: "Cafe Granja La Esperanza", price: "£17" },
      { name: "La Esperanza Tres Dragones", notes: "Cafe Granja La Esperanza", price: "£17" },
    ],
  },
  {
    title: "Decaf",
    items: [
      { name: "Decaf Brazil", notes: "MC process", price: "£12" },
      { name: "Decaf Colombia", notes: "Swiss Water process", price: "£16" },
    ],
  },
];
