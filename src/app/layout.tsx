import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
	subsets: ["latin-ext"],
	weight: ["300", "400"],
	style: ["normal", "italic"],
	variable: "--font-cormorant",
	display: "swap",
});

const dmMono = DM_Mono({
	subsets: ["latin"],
	weight: ["300", "400"],
	variable: "--font-mono",
	display: "swap",
});

const caveat = Caveat({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-caveat",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Julia Walczak — Portfolio architektoniczne",
	description: "Portfolio architektoniczne. Projektowanie przestrzeni publicznych, ogrodów prywatnych i obiektów małej architektury.",
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon.svg",
		apple: "/favicon.svg",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" className={`${cormorant.variable} ${dmMono.variable} ${caveat.variable}`}>
			<body>{children}</body>
		</html>
	);
}
