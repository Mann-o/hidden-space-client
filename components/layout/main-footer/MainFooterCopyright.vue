<template lang="pug">
  .main-footer-copyright
    p &copy; Copyright 2019-{{ currentYear }} - Hidden Space
</template>

<script>
import { lightFormat } from 'date-fns'

export default {
  name: 'MainFooterCopyright',

  computed: {
    currentYear () {
      return lightFormat(new Date(), 'yyyy')
    },
  },
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
