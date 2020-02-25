<template lang="pug">
  div
    MainHeaderPageHeroContent(title="Therapists" :breadcrumbs="breadcrumbs")
    ModelPreviewList(v-if="therapists")
      ClientOnly: ModelPreview(
        v-for="{ id, slug, images, firstNames, treatment, title, biography } in therapists"
        :key="id"
        route="therapists"
        :slug="slug"
        :main-image="images.length ? 0 : null"
        :images="images"
        :title="firstNames"
        :subtitle="treatment"
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
