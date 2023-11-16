// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';
import { inject } from '@vercel/analytics';

import languages from './lang/languages'
import theme from './config/theme'
import brand from './assets/text/brand'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { timeline: { enabled: true } },
  nitro: {
    prerender: {
      // crawlLinks: true,
      routes: ['/'],
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: brand.education.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: brand.education.desc },
        { name: 'msapplication-TileColor', content: '#3FFF' },
        { name: 'msapplication-TileImage', content: '/images/education-logo-2.png' },
        // PWA primary color
        { name: 'theme-color', content: theme.primary },
        // Facebook
        { property: 'author', content: 'LE TRADER AFRICAIN' },
        { property: 'og:site_name', content: 'www.letraderaficain.com, LE TRADER AFRICAIN, letraderafricain.com' },
        { property: 'og:locale', content: 'fr_Fr' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { property: 'twitter:site', content: 'www.letraderaficain.com' },
        { property: 'twitter:domain', content: 'www.letraderaficain.com' },
        { property: 'twitter:creator', content: 'LE TRADER AFRICAIN' },
        { property: 'twitter:card', content: '/images/education-logo-2.png' },
        { property: 'twitter:image:src', content: '/images/education-logo-2.png' },
        { property: 'og:url', content: brand.education.url },
        { property: 'og:title', content: brand.education.projectName },
        { property: 'og:description', content: brand.education.desc },
        { name: 'twitter:site', content: brand.education.url },
        { name: 'twitter:card', content: '/images/education-logo-2.png' },
        { name: 'twitter:image', content: brand.education.img },
        { property: 'og:image', content: brand.education.img },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        // Favicon
        { rel: 'shortcut icon', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/education-logo-2.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/education-logo-2.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/education-logo-2.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/education-logo-2.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/education-logo-2.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/education-logo-2.png' },
        // { rel: 'manifest', href: "/manifest.webmanifest" },
        // Fonts and Icons
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'manifest', href: '/favicons/manifest.json' },
        { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css' }
      ]
    },
  },

  css: [
    'aos/dist/aos.css',
    'vuetify/lib/styles/main.sass',
    '@splidejs/vue-splide/css',
    '@/assets/scss/vuetify-overide.scss',
    '@/assets/scss/transition.scss',
    '@/assets/scss/vendors/animate.css',
    '@/assets/scss/vendors/animate-extends.css',
    '@/assets/scss/vendors/hamburger-menu.css'
  ],
  modules: [
    '@nuxtjs/supabase',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'vite-plugin-eslint', '@vite-pwa/nuxt',
    '@nuxtjs/i18n', '@vueuse/nuxt', '@pinia/nuxt'],
  supabase: {
    redirect: false,
  },


  i18n: {
    locales: languages,
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    vueI18n: './config/i18n.js', // use this options for next vueI18n version
  },

  vite: {
    define: {
      'process.env.DEBUG': true,
    },

    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/scss/styles.scss";` } // eslint-disable-line
      }
    },
    // plugins: [
    //   eslintPlugin(),
    // ]
  },
  build: {
    transpile: ['vuetify'],
    extend(config) {
      config.performance.hints = false
    },
  },
  // devServer: {
  //   port: 3000,
  // }
})