<template lang="pug">
  .page-contact-us
    MainHeaderPageHeroContent(title="Contact Us" :breadcrumbs="breadcrumbs")

    .page-contact-us__contact-info
      h2 Get in Touch
      .page-contact-us__contact-info__grid
        .page-contact-us__contact-info__grid__item
          h3 Telephone
          span 07837755579
        .page-contact-us__contact-info__grid__item
          h3 Email
          a(href="mailto:ruth@thehiddenspace.co.uk") ruth@thehiddenspace.co.uk
        .page-contact-us__contact-info__grid__item
          h3 Full Address
          address Hidden Space#[br]Picton Manor#[br]Ellison Place#[br]Newcastle upon Tyne#[br]NE1 8XG

    .page-contact-us__parking
      h2 Parking
      p Public parking is available at Ellison Place Car Park.
      p One car parking space available for practitioners at the front of the office.
      p Walking distance to all city centre bus, metro and train routes.
</template>

<script>
export default {
  name: 'PageContactUs',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    breadcrumbs: [
      { label: 'Contact Us' },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.page-contact-us

  +has(contact-info)

    h2
      color: $brand-secondary
      text-align: left

    h3
      color: $brand-primary
      padding-bottom: 4px

    +has(grid)
      display: grid
      grid-template-columns: 1fr
      grid-gap: 2rem

    address
      font-style: normal

  +has(parking)
    padding-top: 8rem

    h2
      color: $brand-secondary
      text-align: left

    p
      color: $brand-primary

      &:not(:last-of-type)
        padding-bottom: 2rem

  +has(form)
    padding-top: 8rem

    h2
      color: $brand-secondary
      text-align: left

    +has(row)

      &:not(:first-of-type)
        margin-top: 1rem

      &:last-of-type
        padding-top: 1rem
</style>
