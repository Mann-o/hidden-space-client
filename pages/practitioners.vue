<template lang="pug">
  .page-practitioners
    MainHeaderPageHeroContent(title="Practitioners" :breadcrumbs="breadcrumbs")

    .page-practitioners__content
      p.page-practitioners__content__prefix Hidden Space works to build a service which enables you to have your own autonomy, at the same time as feeling secure and supported in your working environment. We allow for flexibility in your bookings, while maintaining competitive room rates in this bespoke therapeutic Hidden Space.
      p We aspire to create a community of therapists, working with each other to ensure that we continue to provide the best possible service in the most efficient and practical way.
      p Before you can rent Hidden Space, you are required to show the following;
      ul
        li Your membership to your chosen governing body within your speciality
        li Your registration certificate for the Information Commissioners’ Office
        li Confirmation that you are attending supervision for the work that you do within Hidden Space
      p.page-practitioners__content__suffix Please #[nuxt-link(to="/contact-us") contact us] for information about room rate costs, discounts, CPD events and what is included in your room rent. Security and user information will be offered upon booking.

</template>

<script>
export default {
  name: 'PagePractitioners',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    breadcrumbs: [
      { label: 'Practitioners' },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.page-practitioners

  +has(content)

    p
      &:not(:last-of-type)
        padding-bottom: 2rem

      &:last-of-type
        padding-top: 2rem

    ul
      list-style-position: inside

    +has(prefix)
      font-weight: 600
      color: $brand-primary
      font-size: 1.8rem

    +has(suffix)
      color: $brand-secondary

      a
        color: $brand-secondary
</style>
