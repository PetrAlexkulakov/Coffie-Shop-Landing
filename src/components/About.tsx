import Image from "next/image";
import { site } from "@/data/site";
import styles from "./About.module.css";

const facts = [
  { value: "Small-batch", label: "Roasted locally in Morpeth" },
  { value: "Rainforest Alliance", label: "Certified, ethically sourced beans" },
  { value: "Climate positive", label: "Trees planted with every order" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <Image
            src="/images/about.jpg"
            alt="Filter coffee and a bag of North Side beans on a sunlit table"
            width={1400}
            height={1400}
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </div>
        <div>
          <span className="eyebrow">About us</span>
          <h2 className="section-title">An independent roastery with a love for good coffee.</h2>
          <p className={styles.text}>
            {site.name} has been roasting specialty-grade coffee in Northumberland since{" "}
            {site.established}. We source exceptional beans from trusted farms and cooperatives
            around the world and roast them carefully in small batches, so every cup tastes the
            way the producer intended.
          </p>
          <p className={styles.text}>
            Drop by the roastery for a takeaway brew, take a bag home, or ask us about supplying
            your café — we also offer barista training and equipment support.
          </p>
          <ul className={styles.facts}>
            {facts.map((f) => (
              <li key={f.value}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
