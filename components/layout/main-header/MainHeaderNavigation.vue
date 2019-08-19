<template lang="pug">
  .main-header__navigation
    HamburgerToggle
    MainHeaderNavigationBar
</template>

<script>
export default {
  name: 'MainHeaderNavigation',

  components: {
    HamburgerToggle: () => import('@/components/navigation/HamburgerToggle'),
    MainHeaderNavigationBar: () => import('@/components/layout/main-header/MainHeaderNavigationBar'),
  },
}
</script>

<style lang="stylus" scoped>
// .main-header__navigation
</style>
