<template lang="pug">
  .main-footer
    ArcGenerator(fill="#422d96" bg-fill="#fff" :rotate="true" position="top")
    WidthContainer
      MainFooterNewsletterSignup
      MainFooterPractitionerForm
      MainFooterClientForm
      .main-footer__columns
        .main-footer__column
          MainFooterSocial
          MainFooterAdditionalLinks
          MainFooterCopyright
        .main-footer__column
          MainFooterLogo
</template>

<script>
export default {
  name: 'MainFooter',

  components: {
    ArcGenerator: () => import('@/components/utilities/ArcGenerator'),
    MainFooterAdditionalLinks: () => import('@/components/layout/main-footer/MainFooterAdditionalLinks'),
    MainFooterClientForm: () => import('@/components/layout/main-footer/MainFooterClientForm'),
    MainFooterCopyright: () => import('@/components/layout/main-footer/MainFooterCopyright'),
    MainFooterLogo: () => import('@/components/layout/main-footer/MainFooterLogo'),
    MainFooterNewsletterSignup: () => import('@/components/layout/main-footer/MainFooterNewsletterSignup'),
    MainFooterPractitionerForm: () => import('@/components/layout/main-footer/MainFooterPractitionerForm'),
    MainFooterSocial: () => import('@/components/layout/main-footer/MainFooterSocial'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.main-footer
  margin-top: 28rem
  background-color: $brand-primary
  padding: 8rem 0
  position: relative

  +has(content)
    display: flex
    justify-content: space-between
    align-items: center

  +breakpoint(desktop)
    padding: 4rem 0

    +has(columns)
      display: grid
      grid-template-columns: repeat(2, 1fr)
      grid-gap: 4rem
      padding-top: 8rem
</style>
