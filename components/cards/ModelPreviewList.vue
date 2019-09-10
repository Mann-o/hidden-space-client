<template lang="pug">
  .model-preview-list
    slot
</template>

<script>
export default {
  name: 'ModelPreviewList',

  props: {
    columns: {
      type: [Number, String],
      required: false,
      default: 1,
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/breakpoint'

.model-preview-list
  display: grid
  grid-gap: 8rem

  +breakpoint(phablet)
    grid-template-columns: repeat(2, 1fr)

  +breakpoint(tablet)
    grid-template-columns: repeat(3, 1fr)

  +breakpoint(desktop-xl)
    grid-template-columns: repeat(4, 1fr)
</style>
