import styles from "./About.module.css";

export default function About() {
	return (
		<section id="o-mnie" className={styles.section}>
			<div className={styles.label}>O mnie</div>
			<div className={styles.content}>
				Jestem studentką architektury krajobrazu na Uniwersytecie Przyrodniczym w Poznaniu. W swojej pracy zajmuję się projektowaniem na
				różnych skalach, od przestrzeni publicznych i obiektów użytkowych po ogrody prywatne.
			</div>
		</section>
	);
}
