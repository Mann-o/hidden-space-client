<template lang="pug">
  .page-clients
    MainHeaderPageHeroContent(title="Clients" :breadcrumbs="breadcrumbs")

    .page-clients__content
      p.page-clients__content__prefix Perhaps you have hit upon personal challenges in life? Maybe you are suffering with mental ill health? You may just like to gain a deeper understanding of yourself and how you relate to others around you...
      p Therapeutic practitioners will help you to manage life's unavoidable highs and lows, regain balance and perspective in your life, and can support you in making new informed choices with confidence and dignity. This is all gained through a confidential conversation and a therapeutic relationship with a skilled practitioner.
      p Working in their own unique way, no therapist is the same. Their uniqueness is what makes your therapeutic experience more genuine, bespoke and effective. All therapists who work from Hidden Space are skilled in their own craft, whilst working in line with their ethical code to ensure that a safe environment is created to help you with your personal growth.
      p.page-clients__content__suffix If you are interested in starting therapy or would like to find out more, please contact one of our therapists directly, using the #[nuxt-link(to="/therapists") Our Therapists] section of the website, stating that you found their details through the Hidden Space website. You will receive a response from the therapist directly.
      p.page-clients__content__suffix Alternatively, get in touch and we can help you find what you are looking for.
      p
        nuxt-link.button.button--primary(to="/contact-us") Get In Touch
</template>

<script>
export default {
  name: 'PageClients',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    breadcrumbs: [
      { label: 'Clients' },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.page-clients

  +has(content)

    p:not(:last-of-type)
      padding-bottom: 2rem

    p:last-of-type
      padding-top: 2rem

    +has(prefix)
      font-weight: 600
      color: $brand-primary
      font-size: 1.8rem

    +has(suffix)
      color: $brand-secondary

      a
        color: $brand-secondary
</style>
