"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

function renderTitle(title: string, italic: string) {
	const idx = title.indexOf(italic);
	if (idx === -1) return <>{title}</>;
	return (
		<>
			{title.slice(0, idx)}
			<em className={styles.titleItalic}>{italic}</em>
			{title.slice(idx + italic.length)}
		</>
	);
}

function ParkSvg() {
	return (
		<svg viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg">
			{/* paths */}
			<path d="M30 180 Q80 140 150 130 Q220 120 270 90" stroke="white" strokeWidth="1.5" fill="none" />
			<path d="M30 200 Q90 165 160 155 Q230 145 270 115" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 3" />
			{/* parking */}
			<rect x="180" y="140" width="80" height="55" stroke="white" strokeWidth="1" fill="none" />
			<line x1="196" y1="140" x2="196" y2="195" stroke="white" strokeWidth="0.5" />
			<line x1="212" y1="140" x2="212" y2="195" stroke="white" strokeWidth="0.5" />
			<line x1="228" y1="140" x2="228" y2="195" stroke="white" strokeWidth="0.5" />
			<line x1="244" y1="140" x2="244" y2="195" stroke="white" strokeWidth="0.5" />
			<line x1="260" y1="140" x2="260" y2="195" stroke="white" strokeWidth="0.5" />
			{/* trees */}
			<circle cx="50" cy="70" r="12" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="90" cy="55" r="10" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="140" cy="65" r="13" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="200" cy="50" r="11" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="250" cy="60" r="9" stroke="white" strokeWidth="1" fill="none" />
			{/* ramp */}
			<rect x="40" y="155" width="60" height="20" stroke="white" strokeWidth="1" fill="none" />
			<line x1="40" y1="165" x2="100" y2="165" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
			{/* north arrow */}
			<line x1="270" y1="30" x2="270" y2="50" stroke="white" strokeWidth="1" />
			<polygon points="270,22 265,35 270,30 275,35" fill="white" />
			<text x="268" y="60" fill="white" fontSize="7" fontFamily="monospace">
				N
			</text>
		</svg>
	);
}

function SaunaSvg() {
	return (
		<svg viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg">
			{/* outer circle */}
			<circle cx="150" cy="112" r="80" stroke="white" strokeWidth="1.5" fill="none" />
			{/* inner dome cross-section semicircle */}
			<path d="M110 112 A40 40 0 0 1 190 112" stroke="white" strokeWidth="1" fill="none" />
			<line x1="110" y1="112" x2="190" y2="112" stroke="white" strokeWidth="1" />
			{/* columns */}
			<line x1="130" y1="80" x2="130" y2="112" stroke="white" strokeWidth="0.8" />
			<line x1="150" y1="72" x2="150" y2="112" stroke="white" strokeWidth="0.8" />
			<line x1="170" y1="80" x2="170" y2="112" stroke="white" strokeWidth="0.8" />
			{/* surrounding trees */}
			<circle cx="60" cy="50" r="10" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="240" cy="50" r="10" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="40" cy="130" r="9" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="260" cy="130" r="9" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="80" cy="185" r="11" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="220" cy="185" r="11" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="150" cy="200" r="9" stroke="white" strokeWidth="1" fill="none" />
			{/* water basin */}
			<ellipse cx="150" cy="32" rx="28" ry="12" stroke="white" strokeWidth="1" fill="none" strokeDasharray="3 2" />
		</svg>
	);
}

function GardenSvg({ homeLabel, herbsLabel }: { homeLabel: string; herbsLabel: string }) {
	return (
		<svg viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg">
			{/* plot boundary */}
			<rect x="20" y="20" width="260" height="185" stroke="white" strokeWidth="1.5" fill="none" />
			{/* house */}
			<rect x="90" y="30" width="80" height="55" stroke="white" strokeWidth="1" fill="none" />
			<text x="115" y="62" fill="white" fontSize="7" fontFamily="monospace">
				{homeLabel}
			</text>
			{/* terrace arc */}
			<path d="M90 85 Q130 130 170 85" stroke="white" strokeWidth="1" fill="none" />
			<line x1="90" y1="85" x2="170" y2="85" stroke="white" strokeWidth="0.8" />
			{/* wooden patio */}
			<rect x="175" y="85" width="60" height="50" stroke="white" strokeWidth="1" fill="none" />
			<line x1="175" y1="93" x2="235" y2="93" stroke="white" strokeWidth="0.4" />
			<line x1="175" y1="101" x2="235" y2="101" stroke="white" strokeWidth="0.4" />
			<line x1="175" y1="109" x2="235" y2="109" stroke="white" strokeWidth="0.4" />
			<line x1="175" y1="117" x2="235" y2="117" stroke="white" strokeWidth="0.4" />
			<line x1="175" y1="125" x2="235" y2="125" stroke="white" strokeWidth="0.4" />
			{/* herb zone */}
			<rect x="35" y="130" width="55" height="40" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 2" />
			<text x="42" y="155" fill="white" fontSize="6" fontFamily="monospace">
				{herbsLabel}
			</text>
			{/* fountain */}
			<circle cx="145" cy="170" r="14" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="145" cy="170" r="6" stroke="white" strokeWidth="0.8" fill="none" />
			{/* plants scattered */}
			<circle cx="40" cy="55" r="8" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="55" cy="80" r="7" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="255" cy="150" r="9" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="245" cy="175" r="7" stroke="white" strokeWidth="1" fill="none" />
			<circle cx="200" cy="190" r="8" stroke="white" strokeWidth="1" fill="none" />
		</svg>
	);
}

function ProjectSvg({ id, homeLabel, herbsLabel }: { id: string; homeLabel: string; herbsLabel: string }) {
	switch (id) {
		case "park-komunikacyjny":
			return <ParkSvg />;
		case "sauna-lesna":
			return <SaunaSvg />;
		case "ogrod-przydomowy":
			return <GardenSvg homeLabel={homeLabel} herbsLabel={herbsLabel} />;
		default:
			return null;
	}
}

interface Props {
	project: Project;
	index: number;
}

export default function ProjectCard({ project, index }: Props) {
	const t = useTranslations("ProjectCard");
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	const isReversed = index % 2 === 1;

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={`${styles.card} ${visible ? styles.visible : ""} ${isReversed ? styles.reversed : ""}`}>
			<div className={styles.visual} style={{ background: project.preview ? "var(--bg)" : project.bgColor }}>
				{project.preview ? (
					<Image src={project.preview} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.previewImg} />
				) : (
					<div className={styles.svgWrap}>
						<ProjectSvg id={project.id} homeLabel={t("home")} herbsLabel={t("herbs")} />
					</div>
				)}
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{renderTitle(project.title, project.titleItalic || "")}</h2>
				<p className={styles.desc}>{project.description}</p>
				<div className={styles.tags}>
					{project.tags.map((tag) => (
						<span key={tag} className={styles.tag}>
							{tag}
						</span>
					))}
				</div>
				{project.pdfs.length > 0 && (
					<div className={styles.pdfSection}>
						<span className={styles.pdfLabel}>{t("download")}</span>
						<div className={styles.pdfButtons}>
							{project.pdfs.map((pdf) => (
								<a key={pdf.url} href={pdf.url} download className={styles.pdfButton}>
									{pdf.label} ↓
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
