import styles from "./Contact.module.css";

export default function Contact() {
	return (
		<section id="kontakt" className={styles.section}>
			<div className={styles.label}>Kontakt</div>
			<div>
				<a href="mailto:juliawalczak788@gmail.com" className={styles.email}>
					juliawalczak788@gmail.com
				</a>
			</div>
		</section>
	);
}
