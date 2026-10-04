import { mapQuery, site } from "@/data/site";
import { ArrowIcon, PinIcon } from "./icons";
import styles from "./Location.module.css";

export default function Location() {
  const { address } = site;

  return (
    <section id="visit" className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <span className="eyebrow">Location</span>
          <h2 className="section-title">Find the roastery</h2>
          <address className={styles.address}>
            <PinIcon size={22} />
            <span>
              {site.name}
              <br />
              {address.line1}, {address.line2}
              <br />
              {address.city}, {address.region} {address.postcode}
            </span>
          </address>
          <p className={styles.text}>
            You&apos;ll find us on the Coopies Field estate in Morpeth — follow the smell of
            freshly roasted coffee.
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Get directions <ArrowIcon />
          </a>
        </div>

        <div className={styles.map}>
          <iframe
            title={`Map showing ${site.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
