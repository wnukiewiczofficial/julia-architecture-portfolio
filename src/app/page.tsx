import { redirect } from "next/navigation";

// Static export has no middleware; default locale lives at /pl (copied to index.html after build).
export default function RootPage() {
	redirect("/pl");
}
