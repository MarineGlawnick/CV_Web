// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true,
    },
    app: {
        head: {
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
        },
    },
    css: ["~/assets/scss/theme.scss"],
    modules: [
        [
            "@nuxtjs/i18n",
            {
                vueI18nLoader: true,
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: "i18n_redirected",
                    redirectOn: "root", // recommended
                },
            },
        ],
    ],
    i18n: {
        locales: [
            { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
            { code: "en", iso: "en-US", name: "English", file: "en.json" },
        ],
        defaultLocale: "en",
        strategy: "no_prefix",
        langDir: "locales/",
        lazy: true,
    },
})
