<template lang="pug">
  div
    MainHeaderPageHeroContent(title="Spaces" :breadcrumbs="breadcrumbs")
    ModelPreviewList(v-if="spaces")
      ModelPreview(
        v-for="{ id, slug, images, address, city } in spaces"
        :key="id"
        route="spaces"
        :slug="slug"
        :main-image="images.length ? images[0].url : null"
        :title="address"
        :subtitle="city"
        brief="Some placeholder text"
      )
</template>

<script>
export default {
  name: 'PageSpaces',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
    ModelPreview: () => import('@/components/cards/ModelPreview'),
    ModelPreviewList: () => import('@/components/cards/ModelPreviewList'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },

  data: () => ({
    spaces: null,
    breadcrumbs: [
      { label: 'Spaces' },
    ],
  }),

  async asyncData ({ app: { $axios } }) {
    const { data: spaces } = await $axios.get('/api/spaces')
    return { spaces }
  },
}
</script>

<style lang="stylus" scoped>
.spaces
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-gap: 8rem 4rem
</style>
