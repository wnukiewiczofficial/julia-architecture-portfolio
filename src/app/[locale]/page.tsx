import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutContact from "@/components/AboutContact";
import Footer from "@/components/Footer";

type Props = {
	params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
	const { locale } = use(params);
	setRequestLocale(locale);

	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Projects />
				<AboutContact />
			</main>
			<Footer />
		</>
	);
}
