"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [
	{ href: "#projekty", label: "Projekty" },
	{ href: "#o-mnie-i-kontakt", label: "O mnie i Kontakt" },
] as const;

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

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

	return (
		<header className={`${styles.header} ${menuOpen ? styles.headerMenuOpen : ""}`}>
			<a href="#" className={styles.logo}>
				Julia Walczak
			</a>

			<nav className={styles.nav} aria-label="Główna nawigacja">
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
				aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
				onClick={() => setMenuOpen((open) => !open)}
			>
				<span className={styles.menuIcon} aria-hidden="true" />
			</button>

			<div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`} aria-hidden={!menuOpen} onClick={closeMenu} />

			<nav
				id="mobile-nav"
				className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
				aria-label="Menu mobilne"
				aria-hidden={!menuOpen}
			>
				{links.map(({ href, label }) => (
					<a key={href} href={href} className={styles.mobileLink} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
						{label}
					</a>
				))}
			</nav>
		</header>
	);
}
