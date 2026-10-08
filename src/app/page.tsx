import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Menu from "@/components/Menu";
import { hours, site } from "@/data/site";

// Structured data so Google can show address, hours and links in search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/hero.jpg`,
  telephone: site.contact.phoneHref.replace("tel:", ""),
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: hours
    .filter((d) => d.open)
    .map((d) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: d.day, opens: d.open, closes: d.close })),
  sameAs: [site.contact.instagram, site.contact.facebook],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Hours />
        <About />
        <Menu />
        <Location />
      </main>
      <Contact />
    </>
  );
}
