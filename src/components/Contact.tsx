import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.label}>Kontakt</div>
      <div>
        <a href="mailto:julia.walczak@example.com" className={styles.email}>
          julia.walczak@example.com
        </a>
      </div>
    </section>
  );
}
