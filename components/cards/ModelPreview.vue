<template lang="pug">
  Card
    .model-preview(:class="{ 'model-preview--multi': images && images.length > 1 }")
      NuxtLink(:to="`/${route}/${slug}`")

        carousel(
          v-if="images && images.length"
          :per-page="1"
          :pagination-enabled="false"
          navigation-enabled
        )
          slide(v-for="(image, index) in images" :key="index")
            img(:src="image.url" :alt="image.alt_text")

        .model-preview__image(v-else)
          img(src="/images/missing-avatar.png" alt="Image(s) coming soon!")

        .model-preview__overview
          h5.model-preview__title {{ title }}
          h6.model-preview__subtitle(v-if="subtitle") {{ subtitle }}

        .model-preview__brief(v-if="brief" v-html="`${brief.slice(0, 100)}...`")

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
    mainImageIndex: {
      type: Number,
      required: false,
      default: () => null,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: () => null,
    },
    brief: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: false,
      default: () => null,
    },
  },

  computed: {
    ...mapState([
      'API_URL',
    ]),
    backgroundImage () {
      return (this.mainImage != null)
        ? `url(${this.mainImage})`
        : 'url(/images/missing-avatar.png)'
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.model-preview
  max-width: 25rem
  margin: 0 auto

  a
    text-decoration: none
    display: block

  // +has(image)
  //   overflow: hidden
  //   background-size: cover
  //   background-position: center
  //   width: 100%
  //   height: 25rem
  //   +breakpoint(desktop)
  //     height: 25rem

  //   img
  //     zoom: 2
  //     display: block
  //     margin: auto
  //     height: auto
  //     width: auto
  //     max-height: 100%
  //     max-width: 100%
  //     transition: transform 0.2s

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
