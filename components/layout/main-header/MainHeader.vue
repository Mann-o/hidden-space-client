<template lang="pug">
  .main-header
    WidthContainer
      .main-header__topbar
        MainHeaderLogo
        MainHeaderNavigation
      .main-header__content
        Component(:is="`MainHeader${($route.name !== 'index') ? 'Page' : ''}Hero`")
    ArcGenerator(fill="#fff" bg-fill="#422d96" :rotate="true")
</template>

<script>
export default {
  name: 'MainHeader',

  components: {
    ArcGenerator: () => import('@/components/utilities/ArcGenerator'),
    MainHeaderHero: () => import('@/components/layout/main-header/MainHeaderHero'),
    MainHeaderLogo: () => import('@/components/layout/main-header/MainHeaderLogo'),
    MainHeaderNavigation: () => import('@/components/layout/main-header/MainHeaderNavigation'),
    MainHeaderPageHero: () => import('@/components/layout/main-header/MainHeaderPageHero'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.main-header
  background-color: $brand-primary
  padding: 4rem 0
  position: relative

  +has(topbar)
    display: flex
    justify-content: space-between
    align-items: center

  +breakpoint(desktop)
    padding: 4rem 0
</style>
