// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "shadcn-nuxt"],
	colorMode: {
		classSuffix: "",
		storage: "cookie",
	},
	shadcn: {
		prefix: "",
		componentDir: "components/ui",
	},
	css: ["@/assets/css/tailwind.css"],
});
