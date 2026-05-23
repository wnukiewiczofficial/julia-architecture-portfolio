"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
	const t = useTranslations("Nav");
	const locale = useLocale();
	const [menuOpen, setMenuOpen] = useState(false);

	const links = [
		{ href: "#projekty" as const, label: t("projects") },
		{ href: "#o-mnie-i-kontakt" as const, label: t("aboutContact") },
	];

	const closeMenu = useCallback(() => setMenuOpen(false), []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	useEffect(() => {
		if (!menuOpen) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeMenu();
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [menuOpen, closeMenu]);

	const langSwitch = (
		<div className={styles.langGroup}>
			<span className={styles.langLabel}>{t("languageLabel")}</span>
			<Link href="/" locale={locale === "pl" ? "en" : "pl"} className={styles.langSwitch}>
				{locale === "pl" ? t("switchToEn") : t("switchToPl")}
			</Link>
		</div>
	);

	return (
		<header className={`${styles.header} ${menuOpen ? styles.headerMenuOpen : ""}`}>
			<a href="#" className={styles.logo}>
				Julia Walczak
			</a>

			<div className={styles.headerLang}>{langSwitch}</div>

			<div className={styles.headerEnd}>
				<nav className={styles.nav} aria-label={t("mainNav")}>
					{links.map(({ href, label }) => (
						<a key={href} href={href} className={styles.link}>
							{label}
						</a>
					))}
				</nav>

				<button
					type="button"
					className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
					aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className={styles.menuIcon} aria-hidden="true" />
				</button>
			</div>

			<div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`} aria-hidden={!menuOpen} onClick={closeMenu} />

			<nav
				id="mobile-nav"
				className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
				aria-label={t("mobileNav")}
				aria-hidden={!menuOpen}
			>
				<div className={styles.mobileNavBar}>
					<a href="#" className={styles.logo} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
						Julia Walczak
					</a>
					<button type="button" className={styles.closeButton} aria-label={t("closeMenu")} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
						<span className={styles.closeIcon} aria-hidden="true" />
					</button>
				</div>
				<div className={styles.mobileNavLinks}>
					{links.map(({ href, label }) => (
						<a key={href} href={href} className={styles.mobileLink} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
							{label}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
