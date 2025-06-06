import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: "node-server",
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxtjs/sitemap",
    "nuxt-gtag",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  gtag: {
    id: "G-WFY95HZ6QC",
  },
  app: {
    head: {
      title: "Intooda",
      titleTemplate: "%s | Intooda",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Intooda" },
        {
          property: "og:description",
          content: "",
        },
        { property: "og:url", content: "https://intooda.world/" },
        {
          property: "og:image",
          content: "https://intooda.world/preview/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Intooda" },
        {
          name: "twitter:description",
          content: "",
        },
        {
          name: "twitter:image",
          content: "https://intooda.world/preview/og-image.png",
        },
        { property: "og:logo", content: "https://intooda.world/logo.png" },
        { property: "og:locale", content: "en_GB" },
        { property: "og:locale:alternate", content: "it_IT" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "image_src",
          href: "https://intooda.world/preview/og-image.png",
        },
      ],
    },
  },
  site: {
    url: "https://intooda.world",
    name: "Intooda",
  },
  fonts: {},
  i18n: {
    lazy: true,
    langDir: "../locales",
    locales: [
      {
        code: "en",
        iso: "en-GB",
        name: "English",
        file: "en-GB.json",
      },
      {
        code: "it",
        iso: "it-IT",
        name: "Italiano",
        file: "it-IT.json",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
      fallbackLocale: "en",
      cookieSecure: true,
    },
  },
  icon: {
    size: "1em",
    mode: "css",
    cssLayer: "base",
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/icons",
      },
    ],
  },
});
