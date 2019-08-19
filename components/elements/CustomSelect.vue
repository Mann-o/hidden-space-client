<template lang="pug">
  .custom-select

    .custom-select__active(:class="{ 'custom-select__active--filled': hasSelectedOption }")
      .custom-select__active__text {{ activeText }}
      .custom-select__active__caret
        FontIcon(icon="angle-down" set="solid")
      // .custom-select__active__clear(v-if="hasSelectedOption" @click="clearSelectedOption")
      //   FontIcon(icon="times" set="solid")

    .custom-select__dropdown
      select(v-model="localValue" :aria-label="accessibleLabel")
        option(v-if="options.length" v-for="option in options" :key="option[keyProp]" :value="option") {{ option[valueProp] }}
</template>

<script>
export default {
  name: 'CustomSelect',

  props: {
    accessibleLabel: {
      type: String,
      required: false,
      default: 'Select dropdown field',
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      required: true,
      validator: p => (typeof (p === 'object') || (p === null)),
    },
    keyProp: {
      type: String,
      required: false,
      default: 'key',
    },
    valueProp: {
      type: String,
      required: false,
      default: 'value',
    },
    placeholderText: {
      type: String,
      required: true,
    },
  },

  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$nextTick(() => {
          this.$emit('input', value)
        })
      },
    },
    hasSelectedOption () {
      return (this.localValue != null)
    },
    activeText () {
      return (this.hasSelectedOption)
        ? this.localValue[this.valueProp]
        : this.placeholderText
    },
  },

  // methods: {
  //   clearSelectedOption () {
  //     this.$nextTick(() => {
  //       this.$emit('input', null)
  //     })
  //   },
  // },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.custom-select
  position: relative
  height: 2.6rem
  color: $brand-secondary
  font-weight: 600
  display: inline-block

  +has(active)
    position: relative
    display: inline-block
    height: 100%

    // +is(filled)
    //   .custom-select__active__clear
    //     opacity: 1

    +has(text)
      // position: absolute
      // top: 0
      // left: 0
      // bottom: 0
      // right: 0
      padding-right: 2rem
      white-space: nowrap

    +has(caret)
      position: absolute
      top: 0
      right: 0
      bottom: 0

    // +has(clear)
    //   opacity: 0
    //   transition: opacity .2s
    //   position: absolute
    //   top: 0
    //   right: 4rem
    //   bottom: 0
    //   z-index: 1

    +has(caret)
      font-size: 1.8rem

  +has(dropdown)
    position: absolute
    top: 0
    left: 0
    bottom: 0
    opacity: 0

    select
      cursor: pointer
</style>
