<template lang="pug">
  .layout-default
    MainHeader.layout-default__header
    WidthContainer
      Nuxt.layout-default__content
    MainFooter.layout-default__footer
</template>

<script>
export default {
  name: 'LayoutDefault',

  components: {
    MainFooter: () => import('@/components/layout/main-footer/MainFooter'),
    MainHeader: () => import('@/components/layout/main-header/MainHeader'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/vendor/font-awesome'
@import '~assets/styles/vendor/vue-carousel'

@import '~assets/styles/utilities/reset'
@import '~assets/styles/utilities/fonts'

@import '~assets/styles/core/typography'

@import '~assets/styles/elements/buttons'
@import '~assets/styles/elements/inputs'
</style>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.layout-default

  +has(content)
    padding-top: 10rem
</style>
