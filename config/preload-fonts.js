export default [300, '300italic', 600, '600italic', 900, 'regular', 'italic'].map((fontStyle) => ({
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  href: `/fonts/poppins-v6-latin-${fontStyle}.woff2`,
  crossorigin: true,
}))
