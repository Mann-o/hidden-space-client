<template lang="pug">
  .intro-text

    h1 Hidden Space is a specialist therapy unit for therapeutic practices and talking therapies.

    p Located in Newcastle City Centre, Hidden Space is both central and off the beaten track, offering convenience as well as privacy.
    p We exist to service both practitioners and patients. Find out more about what we do for both by following the links below.

    ul
      li
        nuxt-link(to="/practitioners") For Practitioners
      li
        nuxt-link(to="/clients") For Clients
</template>

<script>
export default {
  name: 'IntroText',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/breakpoint'

.intro-text
  padding-bottom: 8rem

  h1
    color: $brand-secondary

  p
    font-size: 1.4rem
    padding-bottom: 2rem
    text-align: justify

    +breakpoint(desktop)
      text-align: left

  ul
    list-style-type: none
    display: flex
    padding-top: 2rem

    li
      margin-right: 4rem

      a
        color: $brand-primary
        font-weight: 600
        text-decoration: none
        position: relative
        padding: 2px 0
        border-bottom: 1px solid rgba(255, 255, 255, 0)
        transition: border-color 0.2s
        white-space: nowrap

        &:hover
          border-bottom-color: $brand-primary

        &::after
          position: absolute
          top: 4px
          right: -1.6rem
          content: '>'
          font-size: 1.8rem
</style>
