import Vue from 'vue'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faCheck,
} from '@fortawesome/pro-regular-svg-icons'

import {
  faCheck as faLightCheck,
} from '@fortawesome/pro-light-svg-icons'

import {
  faAngleDown as faSolidAngleDown,
  faCheck as faSolidCheck,
  faHome as faSolidHome,
  faTimes as faSolidTimes,
} from '@fortawesome/pro-solid-svg-icons'

import {
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import FontIcon from '@/components/elements/FontIcon'

export default () => {
  config.autoAddCss = false // fixes a weird issue where icons are huge on page load

  library.add(
    faCheck,

    faLightCheck,

    faSolidAngleDown,
    faSolidCheck,
    faSolidHome,
    faSolidTimes,

    faFacebookF,
    faTwitter,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
  Vue.component('FontIcon', FontIcon)
}
