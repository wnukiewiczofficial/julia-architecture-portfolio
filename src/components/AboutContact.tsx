import styles from "./AboutContact.module.css";

export default function AboutContact() {
	return (
		<section id="o-mnie-i-kontakt" className={styles.section}>
			<div className={styles.grid}>
				<div className={styles.column}>
					<div className={styles.label}>O mnie</div>
					<div className={styles.content}>
						Jestem studentką architektury krajobrazu na Uniwersytecie Przyrodniczym w Poznaniu. W swojej pracy zajmuję się projektowaniem na
						różnych skalach, od przestrzeni publicznych i obiektów użytkowych po ogrody prywatne.
					</div>
				</div>
				<div className={styles.column}>
					<div className={styles.label}>Kontakt</div>
					<a href="mailto:juliawalczak788@gmail.com" className={styles.email}>
						juliawalczak788@gmail.com
					</a>
				</div>
			</div>
		</section>
	);
}
