import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";

export default function Hero() {
	const t = useTranslations("Hero");

	return (
		<section className={styles.hero}>
			<p className={styles.eyebrow}>{t("eyebrow")}</p>
			<h1 className={styles.heading}>{t("heading")}</h1>
			<p className={styles.subtitle}>{t("subtitle")}</p>
			<p className={styles.description}>{t("description")}</p>
		</section>
	);
}
