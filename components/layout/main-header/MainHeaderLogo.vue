<template lang="pug">
  .main-header__logo
    nuxt-link(to="/")
      img(src="/images/logos/hidden-space-white.svg" alt="Hidden Space Logo")
</template>

<script>
export default {
  name: 'MainHeaderLogo',
}
</script>

<style lang="stylus" scoped>
.main-header__logo
  width: 12rem

  a
    display:block
</style>
