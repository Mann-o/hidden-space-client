<template lang="pug">
  .main-footer-logo
    img(src="/images/logos/hidden-space-white.svg" alt="Hidden Space logo")
</template>

<script>
export default {
  name: 'MainFooterLogo',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/breakpoint'

.main-footer-logo
  padding-top: 8rem
  text-align: center

  img
    max-width: 18rem

  +breakpoint(desktop)
    padding-top: 12rem
</style>
