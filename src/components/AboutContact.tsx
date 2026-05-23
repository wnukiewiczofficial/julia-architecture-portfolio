import { useTranslations } from "next-intl";
import styles from "./AboutContact.module.css";

export default function AboutContact() {
	const t = useTranslations("AboutContact");

	return (
		<section id="o-mnie-i-kontakt" className={styles.section}>
			<div className={styles.grid}>
				<div className={styles.column}>
					<div className={styles.label}>{t("aboutLabel")}</div>
					<div className={styles.content}>{t("aboutText")}</div>
				</div>
				<div className={styles.column}>
					<div className={styles.label}>{t("contactLabel")}</div>
					<a href="mailto:juliawalczak788@gmail.com" className={styles.email}>
						juliawalczak788@gmail.com
					</a>
				</div>
			</div>
		</section>
	);
}
