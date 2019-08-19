<template lang="pug">
  .main-header-hero
    h1 Creating a safe place for everyone
    .main-header-hero__ctas
      button.button.button--tertiary Get In Touch
      button.button.button--secondary Find Out More
</template>

<script>
export default {
  name: 'MainHeaderHero',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.main-header-hero
  color: #fff
  // position: absolute
  width: 100%
  left: 0
  // top: 50%
  // transform: translateY(-50%)
  text-align: center
  font-size: 2rem
  padding: 8rem 0

  +has(ctas)
    display: flex
    justify-content: center

    button
      padding-left: 1.8rem
      padding-right: 1.8rem
      white-space: nowrap

      &:first-of-type
        margin-right: 2rem
</style>
