// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@nuxtjs/i18n",
		"shadcn-nuxt",
		"@nuxt/eslint",
	],
	colorMode: {
		classSuffix: "",
		storage: "cookie",
	},
	shadcn: {
		prefix: "",
		componentDir: "components/ui",
	},
	css: ["@/assets/css/tailwind.css"],
	i18n: {
		defaultLocale: "pl",
		locales: [
			{
				code: "pl",
				name: "Polski",
				file: "pl.json",
			},
			{
				code: "en",
				name: "English",
				file: "en.json",
			},
		],
	},
});
