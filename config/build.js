import stylish from 'eslint/lib/cli-engine/formatters/stylish'

export default {
  extend (config, ctx) {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: stylish,
            },
          },
        ],
      })
    }
  },
}
