import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["pl", "en"],
	defaultLocale: "pl",
	// Required for `output: "export"` — no middleware rewrites; explicit /pl and /en paths.
	localePrefix: "always",
	localeDetection: false,
});
