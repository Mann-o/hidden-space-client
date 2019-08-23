<template lang="pug">
  .page-room-for-rent
    MainHeaderPageHeroContent(title="Room For Rent" :breadcrumbs="breadcrumbs")
    .page-room-for-rent__content
      p As well as talking therapies, Hidden Space is available to rent for general use.
      p The room can be set up to accommodate private screenings using our 70-inch projector screen, meetings, conferences, alternative therapies and physiotherapy.
      p Whatever your requirements, please #[nuxt-link(to="/contact-us") get in touch] to see how we can accommodate you and for information about our rental prices.
</template>

<script>
export default {
  name: 'PageRoomForRent',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    breadcrumbs: [
      { label: 'Room For Rent' },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.page-room-for-rent

  +has(content)

    p
      &:not(:last-of-type)
        padding-bottom: 2rem
</style>
