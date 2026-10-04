"use client";

import { useSyncExternalStore } from "react";
import { hours } from "@/data/site";
import styles from "./Hours.module.css";

// Today's weekday in the shop's timezone, e.g. "Monday".
function londonWeekday() {
  return new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: "Europe/London" }).format(
    new Date(),
  );
}

const subscribe = () => () => {};

export default function Hours() {
  // null on the server, so the static HTML stays identical for every visitor.
  const today = useSyncExternalStore(subscribe, londonWeekday, () => null);

  return (
    <section id="hours" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Opening hours</span>
          <h2 className="section-title">Come by for a brew</h2>
          <p className={styles.text}>
            Takeaway brews are poured straight from the roastery. Beans can be ordered online any
            day of the week.
          </p>
        </div>

        <ul className={styles.list}>
          {hours.map((d) => (
            <li key={d.day} className={`${styles.row} ${d.day === today ? styles.today : ""}`}>
              <span className={styles.day}>
                {d.day}
                {d.day === today && <span className={styles.badge}>Today</span>}
              </span>
              <span className={styles.time}>
                {d.open ? `${d.open} – ${d.close}` : "Closed"}
                {d.note && <small>{d.note}</small>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
