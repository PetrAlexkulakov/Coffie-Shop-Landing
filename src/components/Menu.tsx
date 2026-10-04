import { menu, site } from "@/data/site";
import { ArrowIcon } from "./icons";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <section id="menu" className={`section ${styles.section}`}>
      <div className="container">
        <header className={styles.head}>
          <div>
            <span className="eyebrow">Menu</span>
            <h2 className="section-title">Our coffees</h2>
          </div>
          <p className={styles.intro}>
            Single origins, blends and limited lots — brewed for takeaway at the roastery or
            to take home. Prices are per bag of beans.
          </p>
        </header>

        <div className={styles.groups}>
          {menu.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <div className={styles.row}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.dots} aria-hidden />
                      <span className={styles.price}>{item.price}</span>
                    </div>
                    <span className={styles.notes}>{item.notes}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href={site.contact.shop} className={`btn btn-primary ${styles.cta}`} target="_blank" rel="noopener">
          Order beans online <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
