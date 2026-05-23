import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, DM_Mono, Caveat } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

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

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: t("title"),
		description: t("description"),
		icons: {
			icon: "/favicon.svg",
			shortcut: "/favicon.svg",
			apple: "/favicon.svg",
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	const messages = await getMessages();

	return (
		<html lang={locale} className={`${cormorant.variable} ${dmMono.variable} ${caveat.variable}`}>
			<body>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
