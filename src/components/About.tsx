import styles from "./About.module.css";

export default function About() {
  return (
    <section id="o-mnie" className={styles.section}>
      <div className={styles.label}>O mnie</div>
      <div className={styles.content}>
        Julia Walczak. Projektuję przestrzenie od ogrodów prywatnych po obiekty
        publiczne.
      </div>
    </section>
  );
}
