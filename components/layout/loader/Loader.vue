<template lang="pug">
  .loader__wrapper(:class="classes")
    .loader
</template>

<script>
export default {
  name: 'Loader',

  data: () => ({
    isLoading: false,
  }),

  computed: {
    classes () {
      return {
        'loader__wrapper--visible': this.isLoading,
      }
    },
  },

  methods: {
    start () {
      this.isLoading = true
    },
    finish () {
      this.isLoading = false
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.loader
  border-top: 4px solid rgba(#fff, .8)
  border-left: 4px solid rgba(#fff, .4)
  border-bottom: 4px solid rgba(#fff, .2)
  border-right: 4px solid rgba(#fff, 0)
  border-radius: 50%
  animation: rotation 1s infinite linear
  width: 4rem
  height: 4rem

  +has(wrapper)
    position: fixed
    display: flex
    align-items: center
    justify-content: center
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: linear-gradient(to bottom right, $brand-primary 0%, #8d49ed 50%, $brand-primary 100%)
    opacity: 0
    transition: opacity 0.2s
    z-index: 9999
    pointer-events: none

    +is(visible)
      pointer-events: auto
      opacity: 1

@keyframes rotation
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
</style>
