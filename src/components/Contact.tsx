import Image from "next/image";
import { site } from "@/data/site";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "./icons";
import styles from "./Contact.module.css";

export default function Contact() {
  const { contact } = site;

  const cards = [
    { href: contact.instagram, icon: <InstagramIcon size={24} />, label: "Instagram", value: contact.instagramHandle, external: true },
    { href: contact.phoneHref, icon: <PhoneIcon size={24} />, label: "Call us", value: contact.phone },
    { href: `mailto:${contact.email}`, icon: <MailIcon size={24} />, label: "Email", value: contact.email },
  ];

  return (
    <>
      <section id="contact" className={`section ${styles.section}`}>
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Say hello</h2>
          <p className={styles.text}>
            Questions about our coffee, wholesale or barista training? Get in touch — or follow
            along on Instagram for new roasts and behind-the-scenes from the roastery.
          </p>

          <div className={styles.cards}>
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={styles.card}
                {...(c.external && { target: "_blank", rel: "noopener" })}
              >
                <span className={styles.icon}>{c.icon}</span>
                <span className={styles.label}>{c.label}</span>
                <span className={styles.value}>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.brand}>
            <Image src="/images/logo.png" alt="" width={36} height={38} className={styles.logo} />
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
          </div>
          <div className={styles.social}>
            <a href={contact.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={contact.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
