<template lang="pug">
  nuxt-link.main-header-navigation-bar-link(
    :to="route"
    :active-class="($route.name !== 'contact-us') ? 'main-header-navigation-bar-link--active' : ''"
    tag="li"
    :exact="exact"
  )
    a {{ label }}
</template>

<script>
export default {
  name: 'MainHeaderNavigationBarLink',

  props: {
    route: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    exact: {
      required: false,
      default: false,
      validator: p => ((typeof p === 'boolean') || (p === null)),
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.main-header-navigation-bar-link
  margin-top: 2.8rem
  transition: margin-top 0.2s ease-in-out

  &:first-child
    margin-top: 0

  a
    color: #fff
    text-decoration: none
    font-size: 2.4rem

  +breakpoint(desktop)
    margin-top: 0
    margin-left: 2.8rem
    position: relative

    &:last-child a
      background-color: $brand-secondary
      border-radius: 2rem
      padding: 1rem 2rem
      transition: background-color .2s ease-in-out

      &:hover
        background-color: lighten($brand-secondary, 10%)

        &::after
          background-color: rgba(255, 255, 255, 0)

    a
      font-size: 1.8rem
      padding: 1rem 5px
      display: block
      position: relative

      &::after
        content: ''
        position: absolute
        bottom: 0
        left: 5px
        right: 5px
        height: 2px
        border-radius: 1px
        background-color: rgba(255, 255, 255, 0)
        transition: background-color 0.2s

      &:hover

        &::after
          background-color: #fff

    +is(active)

      a::after
          background-color: #fff
</style>
