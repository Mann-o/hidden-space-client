export default {
  '/api': {
    pathRewrite: {
      '^/api': '/api/v1',
    },

    target: (process.env.NODE_ENV === 'production')
      ? 'https://api.thehiddenspace.co.uk'
      : 'http://localhost:3333',

    headers: {
      'HiddenSpace-Api-Key': process.env.API_KEY,
    },
  },
}
