import axios from './config/axios'
import build from './config/build'
import head from './config/head'
import loading from './config/loading'
import markdownit from './config/markdownit'
import modules from './config/modules'
import plugins from './config/plugins'
import proxy from './config/proxy'
import router from './config/router'
import serverMiddleware from './config/server-middleware'

export default {
  build: Object.assign({
    watch: [
      'config',
    ],
  }, build),
  modules,
  plugins,
  axios,
  proxy,
  head,
  loading,
  markdownit,
  router,
  serverMiddleware,
}
