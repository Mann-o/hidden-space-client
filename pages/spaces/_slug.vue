<template lang="pug">
  div
    MainHeaderPageHeroContent(:title="space.name" :breadcrumbs="breadcrumbs")
</template>

<script>
export default {
  name: 'PageSpacesSlug',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    space: null,
  }),

  computed: {
    breadcrumbs () {
      return [
        { to: '/spaces', label: 'Spaces' },
        { label: this.space.name },
      ]
    },
  },
}
</script>
