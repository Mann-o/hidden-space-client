import preloadFonts from './preload-fonts'

export default {
  htmlAttrs: {
    lang: 'en',
  },

  title: 'Hidden Space / Creating a safe place for everyone',

  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no' },
    { hid: 'description', name: 'description', content: '...' },
    { name: 'apple-mobile-web-app-title', content: 'Hidden Space' },
    { name: 'application-name', content: 'Hidden Space' },
    { name: 'msapplication-TileColor', content: '#603cba' },
    { name: 'theme-color', content: '#422d96' },
  ],

  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.cvg', color: '#5bbad5' },
    ...preloadFonts,
  ],
}
