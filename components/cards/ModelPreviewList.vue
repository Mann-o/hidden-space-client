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
  grid-template-columns: repeat(4, 1fr)
  grid-gap: 8rem
</style>
