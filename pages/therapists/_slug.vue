<template lang="pug">
  .page-therapists-slug
    MainHeaderPageHeroContent(v-if="therapist != null" :title="`${therapist.fullName}`" :breadcrumbs="breadcrumbs")

    .page-therapists-slug__therapist-info

      .page-therapists-slug__therapist-info__overview
        h5 {{ therapist.fullName }}
        h6 {{ therapist.treatment }}
        div(v-if="therapist.biography != null" v-html="therapist.biography" style="padding-top:4rem")

      .page-therapists-slug__therapist-info__image
        .page-spaces-slug__space-info__image
          carousel(
            v-if="therapist.images && therapist.images.length"
            :per-page="1"
            :pagination-enabled="false"
            navigation-enabled
          )
            slide(v-for="(image, index) in therapist.images" :key="index")
              img(:src="image.url" :alt="image.alt_text")

          img(v-else src="/images/missing-avatar.png" alt="Image(s) coming soon!")
        //- div(style="padding-top:2rem")
        //-   nuxt-link.btn.btn--secondary(to="/contact-us") Book This Therapist
        div(style="padding-top:2rem")
          h5(style="font-size:1.4rem") Telephone
          span {{ therapist.telephoneNumber }}
        div(style="padding-top:2rem")
          h5(style="font-size:1.4rem") Email
          a(:href="`mailto:${therapist.emailAddress}`") {{ therapist.emailAddress }}

    .page-therapists-slug__other-therapists(v-if="otherTherapists.length" style="padding-top: 8rem")
      h5(style="padding-bottom:2rem") Other Therapists
      ModelPreviewList
        ClientOnly: ModelPreview(
          v-for="{ id, slug, images, firstNames, treatment, title, biography } in otherTherapists"
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
  name: 'PageTherapistsSlug',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
    ModelPreview: () => import('@/components/cards/ModelPreview'),
    ModelPreviewList: () => import('@/components/cards/ModelPreviewList'),
  },

  data: () => ({
    therapist: null,
    otherTherapists: [],
  }),

  computed: {
    breadcrumbs () {
      return [
        { to: '/therapists', label: 'Therapists' },
        { label: this.therapist.fullName },
      ]
    },
    imageSrc () {
      return (this.therapist.images.length)
        ? this.therapist.images[0].url
        : '/images/missing-avatar.png'
    },
  },

  async asyncData ({
    app: { $axios },
    params: { slug },
  }) {
    const [{ data: therapist }, { data: otherTherapists }] = await Promise.all([
      await $axios.get(`/api/therapists/${slug}`),
      await $axios.get('/api/therapists'),
    ])
    return {
      therapist,
      otherTherapists: otherTherapists
        .filter(({ id }) => (id !== therapist.id))
        .slice(0, 4),
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.page-therapists-slug

  +has(therapist-info)
    display: flex
    justify-content: space-between
    padding-bottom: 8rem

    +has(overview)
      padding-right: 8rem

    +has(image)
      text-align: right
</style>
