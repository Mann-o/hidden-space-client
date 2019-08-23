<template lang="pug">
  nav.main-header__navigation-bar(:class="classes")
    ul
      MainHeaderNavigationBarLink(
        v-for="({ route, label, exact }, index) in links"
        :key="index"
        v-bind="{ route, label, exact }"
      )
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MainHeaderNavigationBar',

  components: {
    MainHeaderNavigationBarLink: () => import('./MainHeaderNavigationBarLink'),
  },

  data: () => ({
    links: [
      { route: '/', label: 'Home', exact: true },
      { route: '/clients', label: 'For Clients' },
      { route: '/practitioners', label: 'For Practitioners' },
      { route: '/spaces', label: 'Our Spaces' },
      { route: '/therapists', label: 'Our Therapists' },
      { route: '/room-for-rent', label: 'Room For Rent' },
      // { route: '/news', label: 'News' },
      { route: '/contact-us', label: 'Contact Us' },
    ],
  }),

  computed: {
    ...mapState('mainNavigation', [
      'hamburgerActive',
    ]),
    classes () {
      return {
        'main-header__navigation-bar--active': this.hamburgerActive,
      }
    },
  },

  methods: {
    ...mapActions('mainNavigation', [
      'setHamburgerInactive',
    ]),
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'
.main-header

  +has(navigation-bar)
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    opacity: 0
    pointer-events: none
    transition: opacity .2s ease-in-out
    z-index: 2000
    background: linear-gradient(to bottom right, $brand-primary 0%, #8d49ed 50%, $brand-primary 100%);
    padding: 4rem

    +is(active)
      opacity: 1
      pointer-events: auto

    +breakpoint(desktop)
      opacity: 1
      pointer-events: auto
      background: none
      position: relative
      padding: 0

      ul
        display: flex
</style>
