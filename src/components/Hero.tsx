import Image from "next/image";
import { site } from "@/data/site";
import { ArrowIcon } from "./icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <Image
        src="/images/hero.jpg"
        alt="Freshly roasted coffee beans pouring out of the roaster"
        fill
        preload
        sizes="100vw"
        className={styles.bg}
      />
      <div className={`container ${styles.content}`}>
        <span className="eyebrow">Morpeth · Northumberland · Est. {site.established}</span>
        <h1 className={styles.title}>
          Coffee roasted
          <br />
          <em>just up the road.</em>
        </h1>
        <p className={styles.lead}>
          Small-batch specialty coffee from {site.name}. Ethically sourced beans, roasted in
          Morpeth and brewed for takeaway straight from the roastery.
        </p>
        <div className={styles.actions}>
          <a href="#menu" className="btn btn-primary">
            See the menu <ArrowIcon />
          </a>
          <a href="#visit" className="btn btn-ghost">
            Find us
          </a>
        </div>
      </div>
    </section>
  );
}
