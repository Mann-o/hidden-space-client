<template lang="pug">
  Card
    .model-preview
      nuxt-link(:to="`/${route}/${slug}`")

        .model-preview__image(:style="{ backgroundImage: `url(${API_URL + imageUrl})` }")

        .model-preview__overview
          h5.model-preview__title {{ title }}
          h6.model-preview__subtitle {{ subtitle }}

        .model-preview__brief(v-html="$md.render(brief)")

        .model-preview__fake-link
          span View Full Details &raquo;
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModelPreview',

  components: {
    Card: () => import('@/components/cards/Card'),
  },

  props: {
    route: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState([
      'API_URL',
    ]),
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.model-preview
  // max-width: 25rem
  margin: 0 auto

  a
    text-decoration: none
    display: block

    &:hover

      .model-preview__image img
        transform: scale(1.05)

  +has(image)
    overflow: hidden
    background-size: cover
    background-position: center
    width: 100%
    height: 25rem
    +breakpoint(desktop)
      height: 25rem

    img
      zoom: 2
      display: block
      margin: auto
      height: auto
      width: auto
      max-height: 100%
      max-width: 100%
      transition: transform 0.2s

  +has(overview)
    padding-top: 1.6rem

  +has(title)
    font-weight: 700

  +has(subtitle)
    padding-top: 4px

  +has(brief)
    padding-top: 1.6rem
    color: $text
    font-size: 1.4rem

  +has(fake-link)

    span
      display: block
      margin-top: 1.6rem
      color: $brand-primary
      font-size: 1.8rem
      font-weight: 600
</style>
