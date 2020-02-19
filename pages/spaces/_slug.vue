<template lang="pug">
  .page-spaces-slug
    MainHeaderPageHeroContent(:title="space.address" :breadcrumbs="breadcrumbs")

    .page-spaces-slug__space-info

      .page-spaces-slug__space-info__overview
        h5 {{ space.address }}
        h6 {{ space.city }}
        div(v-if="space.biography != null" v-html="space.biography" style="padding-top:4rem")

      .page-spaces-slug__space-info__image
        img(:src="imageSrc")
        div(style="padding-top:2rem")
          nuxt-link.btn.btn--secondary(to="/contact-us") Book This Space

    .page-spaces-slug__other-spaces(v-if="otherSpaces.length" style="padding-top: 8rem")
      h5(style="padding-bottom:2rem") Other Spaces
      ModelPreviewList
        ModelPreview(
          v-for="{ id, slug, images, address, city } in otherSpaces"
          :key="id"
          route="spaces"
          :slug="slug"
          :main-image="imageSrc"
          :title="address"
          :subtitle="city"
          brief="Some placeholder text"
        )
</template>

<script>
export default {
  name: 'PageSpacesSlug',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
    ModelPreview: () => import('@/components/cards/ModelPreview'),
    ModelPreviewList: () => import('@/components/cards/ModelPreviewList'),
  },

  data: () => ({
    space: null,
    otherSpaces: [],
  }),

  computed: {
    breadcrumbs () {
      return [
        { to: '/spaces', label: 'Spaces' },
        { label: this.space.address },
      ]
    },
    imageSrc () {
      return (this.space.images.length)
        ? this.space.images[0].url
        : '/images/missing-avatar.png'
    },
  },

  async asyncData ({
    app: { $axios },
    params: { slug },
  }) {
    const [{ data: space }, { data: otherSpaces }] = await Promise.all([
      await $axios.get(`/api/spaces/${slug}`),
      await $axios.get('/api/spaces'),
    ])
    return {
      space,
      otherSpaces: otherSpaces
        .filter(({ id }) => (id !== space.id))
        .slice(0, 4),
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.page-spaces-slug

  +has(space-info)
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 4rem

    +has(image)
      text-align: right
</style>
