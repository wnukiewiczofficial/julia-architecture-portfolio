import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutContact from "@/components/AboutContact";
import Footer from "@/components/Footer";

export default function Home() {
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
