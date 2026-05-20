import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        Julia Walczak
      </a>
      <nav className={styles.nav}>
        <a href="#projekty" className={styles.link}>
          Projekty
        </a>
        <a href="#o-mnie" className={styles.link}>
          O mnie
        </a>
        <a href="#kontakt" className={styles.link}>
          Kontakt
        </a>
      </nav>
    </header>
  );
}
