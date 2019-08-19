<template lang="pug">
  .main-header-page-hero
    PortalTarget.main-header-page-hero__title(name="title")
    PortalTarget.main-header-page-hero__breadcrumbs(name="breadcrumbs")
</template>

<script>
export default {
  name: 'MainHeaderPageHero',
}
</script>

<style lang="stylus" scoped>
.main-header-page-hero
  color: #fff
  // position: absolute
  width: 100%
  // left: 0
  // top: 50%
  // transform: translateY(-50%)
  text-align: center
  font-size: 2rem
  padding: 0 2rem
</style>

<style lang="stylus">
@import '~assets/styles/mixins/bem'

.main-header-page-hero
  padding: 8rem 0

  +has(breadcrumbs)
    text-align: center

    ul
      list-style-type: none
      display: flex
      flex-direction: row
      justify-content: center

      li
        font-size: 1.2rem
        position: relative

        &:not(:first-child)
          margin-left: 1rem
          padding-left: 1.4rem

        & + li::before
          content: '>'
          position: absolute
          left: 0

        a
          padding: 2px 0
          color: #fff
          text-decoration: none
          white-space: nowrap
</style>
