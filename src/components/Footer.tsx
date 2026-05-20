import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span className={styles.name}>Julia Walczak</span>
			<span className={styles.year}>{new Date().getFullYear()}</span>
		</footer>
	);
}
