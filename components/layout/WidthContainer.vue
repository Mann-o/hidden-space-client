<template lang="pug">
  .width-container
    slot
</template>

<script>
export default {
  name: 'WidthContainer',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.width-container
  max-width: 1280px
  margin: 0 auto
  padding: 0 4rem

  +breakpoint(desktop)
    padding: 0
</style>
