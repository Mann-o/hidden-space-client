<template lang="pug">
  .main-footer-social
    h6 Follow Us On Social Media
    ul.main-footer-social__links
      li
        a.main-footer-social__link(href="#")
          FontIcon(icon="facebook-f" set="brands")
      li
        a.main-footer-social__link(href="#")
          FontIcon(icon="twitter" set="brands")
</template>

<script>
export default {
  name: 'MainFooterSocial',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.main-footer-social
  color: #fff
  line-height: 3rem
  vertical-align: middle
  font-weight: 600
  padding-top: 8rem
  padding-bottom: 2rem

  h6
    color: #fff
    display: block
    text-align: center
    padding-bottom: 1rem

  +has(links)
    list-style-type: none
    text-align: center
    display: flex
    margin: 0 auto
    justify-content: center

    li:first-of-type
      margin-right: 4rem

  +has(link)
    display: inline-block
    border-radius: 100%
    padding: 5px
    width: 3rem
    text-align: center
    position: relative
    height: 3rem
    background-color: #fff
    color: $brand-primary
    transition: background-color 0.2s, color 0.2s
    margin-left: -2rem

    &:hover
      background-color: rgba(255, 255, 255, 0.2)
      color: #fff

    svg
      position: absolute
      top: 50%
      left: 50%
      transform: translateX(-50%) translateY(-50%)

  +breakpoint(desktop)
    display: inline-grid
    grid-template-columns: 1fr 7rem

    +has(links)
      padding-left: 2rem
</style>
