<template lang="pug">
  div
    MainHeaderPageHeroContent(title="Therapists" :breadcrumbs="breadcrumbs")
    ModelPreviewList(v-if="therapists")
      ModelPreview(
        v-for="{ id, slug, image, firstNames, fullNameWithTitle, title, biography } in therapists"
        :key="id"
        route="therapists"
        :slug="slug"
        :main-image="image != null ? image.url : null"
        :title="firstNames"
        :subtitle="fullNameWithTitle"
        :brief="biography"
      )
</template>

<script>
export default {
  name: 'PageTherapistsIndex',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
    ModelPreview: () => import('@/components/cards/ModelPreview'),
    ModelPreviewList: () => import('@/components/cards/ModelPreviewList'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },

  data: () => ({
    therapists: null,
    breadcrumbs: [
      { label: 'Therapists' },
    ],
  }),

  async asyncData ({ app, store }) {
    const { data: therapists } = await app.$axios.get('/api/therapists')
    return { therapists }
  },
}
</script>

<style lang="stylus" scoped>

</style>
