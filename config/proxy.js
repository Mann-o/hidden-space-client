export default {
  '/api': {
    pathRewrite: {
      '^/api': '/api/v1',
    },
    target: (process.env.NODE_ENV === 'production')
      ? 'https://portal.thehiddenspace.co.uk'
      : 'http://localhost:3333',
  },
}
