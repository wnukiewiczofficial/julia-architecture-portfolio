import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<p className={styles.eyebrow}>Julia Walczak</p>
			<h1 className={styles.heading}>
				Portfolio <br /> Architektoniczne
			</h1>
			<p className={styles.subtitle}>Architektura krajobrazu</p>
			<p className={styles.description}>
				Prace z zakresu projektowania przestrzeni publicznych, ogrodów prywatnych i obiektów małej architektury.
			</p>
		</section>
	);
}
