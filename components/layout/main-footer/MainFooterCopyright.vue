<template lang="pug">
  .main-footer-copyright
    p &copy; Copyright 2019 - Hidden Space
</template>

<script>
export default {
  name: 'MainFooterCopyright',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/breakpoint'

.main-footer-copyright
  color: #fff
  font-size: 1.2rem
  padding-top: 2rem
  text-align: center

  +breakpoint(desktop)
    text-align: left
</style>
