<template lang="pug">
  .page-therapists-slug
    MainHeaderPageHeroContent(v-if="therapist != null" :title="`${therapist.fullNameWithTitle}`" :breadcrumbs="breadcrumbs")

    .page-therapists-slug__therapist-info

      .page-therapists-slug__therapist-info__overview
        h5 {{ therapist.fullNameWithTitle }}
        h6 {{ therapist.title }}
        div(v-if="therapist.biography != null" v-html="therapist.biography")

      .page-therapists-slug__therapist-info__image
        img(:src="imageSrc")
        div(style="padding-top:2rem")
          nuxt-link.btn.btn--secondary(to="/contact-us") Book This Therapist
        div(style="padding-top:2rem")
          h5(style="font-size:1.4rem") Telephone
          span {{ therapist.telephoneNumber }}
        div(style="padding-top:2rem")
          h5(style="font-size:1.4rem") Email
          a(:href="`mailto:${therapist.emailAddress}`") {{ therapist.emailAddress }}

    .page-therapists-slug__other-spaces(v-if="otherTherapists.length")
      h5 Other Therapists
</template>

<script>
export default {
  name: 'PageTherapistsSlug',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    therapist: null,
    otherTherapists: [],
  }),

  computed: {
    breadcrumbs () {
      return [
        { to: '/therapists', label: 'Therapists' },
        { label: this.therapist.fullNameWithTitle },
      ]
    },
    imageSrc () {
      return (this.therapist.image != null)
        ? this.therapist.image.url
        : '/images/missing-avatar.png'
    },
  },

  async asyncData ({
    app: { $axios },
    params: { slug },
  }) {
    const { data: therapist } = await $axios.get(`/api/therapists/${slug}`)
    return { therapist }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.page-therapists-slug

  +has(therapist-info)
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 4rem

    +has(image)
      text-align: right
</style>
