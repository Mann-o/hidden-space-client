<template lang="pug">
  .page-spaces-slug
    MainHeaderPageHeroContent(:title="space.address" :breadcrumbs="breadcrumbs")

    .page-spaces-slug__space-info

      .page-spaces-slug__space-info__overview
        h5 {{ space.address }}
        h6 {{ space.city }}
        div(v-if="space.biography != null" v-html="space.biography")

      .page-spaces-slug__space-info__image
        img(:src="imageSrc")
        div(style="padding-top:2rem")
          nuxt-link.btn.btn--secondary(to="/contact-us") Book This Space

    .page-spaces-slug__other-spaces(v-if="otherSpaces.length")
      h5 Other Spaces
</template>

<script>
export default {
  name: 'PageSpacesSlug',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
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
      return (this.space.image != null)
        ? this.space.image.url
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
