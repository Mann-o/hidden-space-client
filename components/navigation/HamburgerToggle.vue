<template lang="pug">
  .hamburger-toggle(:class="toggleClass" @click="toggleHamburgerState")
    .hamburger-toggle__line
    .hamburger-toggle__line
    .hamburger-toggle__line
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HamburgerToggle',

  computed: {
    ...mapState('mainNavigation', [
      'hamburgerActive',
    ]),
    toggleClass () {
      return {
        'hamburger-toggle--active': this.hamburgerActive,
      }
    },
  },

  methods: {
    ...mapActions('mainNavigation', [
      'toggleHamburgerState',
    ]),
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.hamburger-toggle
  position: absolute
  top: 2rem
  right: 2rem
  transition: opacity .2s ease-in-out
  opacity: 1
  padding: 2rem

  &:hover
    cursor: pointer

  &::before
    content: ''
    position: absolute
    width: 40px
    height: 40px
    border: 2px solid transparent
    top: calc(50% - 20px)
    left: calc(50% - 20px)
    border-radius: 100%
    transition: all .2s ease-in-out

  +is(active)
    transform: rotate(45deg)
    position: fixed
    z-index: 2001

    &::before
      border-color: #fff

    .hamburger-toggle__line
      width: 20px

      &:nth-child(1)
        transform: translateY(8px)

      &:nth-child(2)
        opacity: 0
        width: 20px

      &:nth-child(3)
        transform: translateY(-8px) rotate(90deg)
        width: 20px

  +has(line)
    width: 28px
    height: 2px
    background-color: #fff
    display: block
    margin: 6px 0 6px auto
    transition: all .2s ease-in-out

    &:nth-child(2)
      width: 20px

    &:nth-child(3)
      width: 14px

  +breakpoint(desktop)
    opacity: 0

    padding: 0
    pointer-events: none
    height: 0
</style>
