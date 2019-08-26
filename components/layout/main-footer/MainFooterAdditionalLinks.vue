<template lang="pug">
  .main-footer-additional-links
    ul
      li
        nuxt-link(to="/terms-and-conditions") T&amp;C's
      li
        nuxt-link(to="/privacy-policy") Privacy Policy
      li
        nuxt-link(to="/sitemap") Site Map
</template>

<script>
export default {
  name: 'MainFooterAdditionalLinks',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/breakpoint'

.main-footer-additional-links
  color: #fff
  font-size: 1.2rem
  padding-top: 4rem

  ul
    list-style-type: none
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 2rem

    li
      text-align: center

  a
    color: #fff
    text-decoration: none
    font-weight: 600

    &:hover
      text-decoration: underline

  +breakpoint(desktop)
    display: inline-block

    ul
      display: flex

      li
        text-align: left

        &:not(:first-of-type)
          margin-left: 2rem
</style>
