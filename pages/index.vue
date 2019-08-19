<template lang="pug">
  .page-index
    .page-index__intro
      IntroText
      GetInTouchForm

    .page-index__spaces
      h2 Our Spaces
      ModelPreviewList(v-if="spaces")
        ModelPreview(
          v-for="{ id, slug, images, name, city } in spaces"
          :key="id"
          route="spaces"
          :slug="slug"
          :imageUrl="images[0].url"
          :title="name"
          :subtitle="city"
          brief="Some placeholder text"
        )

      .page-index__spaces__actions
          nuxt-link.button.button--secondary(to="/spaces") View All

    .page-index__therapists
      h2 Our Therapists
      .page-index__therapists__filters
        CustomSelect(
          placeholder-text="Gender"
          :options="[{ key: 'male', value: 'Male' }, { key: 'female', value: 'Female' }]"
          v-model="therapistFilters.gender"
        )
        CustomSelect(
          placeholder-text="Practice"
          :options="[]"
          v-model="therapistFilters.practice"
        )
        CustomSelect(
          placeholder-text="Treatment"
          :options="[]"
          v-model="therapistFilters.treatment"
        )
      .page-index__therapists__list
        ModelPreviewList(v-if="filteredTherapists")
          ModelPreview(
            v-for="{ id, key, slug, profileImage, firstName, lastName, title, shortBiography } in filteredTherapists"
            :key="id"
            route="therapists"
            :slug="slug"
            :imageUrl="profileImage.url"
            :title="`${firstName} ${lastName}`"
            :subtitle="title"
            :brief="shortBiography"
          )

      .page-index__therapists__actions
        nuxt-link.button.button--secondary(to="/therapists") View All
</template>

<script>
export default {
  name: 'PageIndex',

  components: {
    CustomSelect: () => import('@/components/elements/CustomSelect'),
    IntroText: () => import('@/components/pages/index/IntroText'),
    GetInTouchForm: () => import('@/components/forms/GetInTouchForm'),
    ModelPreviewList: () => import('@/components/cards/ModelPreviewList'),
    ModelPreview: () => import('@/components/cards/ModelPreview'),
  },

  data: () => ({
    therapistFilters: {
      gender: null,
      practice: null,
      treatment: null,
    },
    therapists: null,
    spaces: null,
  }),

  computed: {
    filteredTherapists () {
      return (this.therapistFilters.gender == null)
        ? this.therapists
        : this.therapists.filter(({ gender }) => {
          return (gender === this.therapistFilters.gender.key)
        })
    },
  },

  async asyncData ({ app: { $axios }, store }) {
    const [{ data: spaces }, { data: therapists }] = await Promise.all([
      await $axios.get('/api/spaces'),
      await $axios.get('/api/therapists'),
    ])
    return { spaces, therapists }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'
@import '~assets/styles/mixins/breakpoint'

.page-index

  +has(intro)
    display: grid

    +breakpoint(tablet)
      grid-template-columns: repeat(2, 1fr)
      grid-gap: 8rem

  +has(spaces)
    padding-bottom: 16rem

    +has(actions)
      padding-top: 8rem
      text-align: center

    h2
      padding-bottom: 4rem

  +has(therapists)

    +has(filters)
      padding-top: 2rem
      padding-bottom: 4rem
      display: flex

      .custom-select
        margin-right: 4rem

    +has(actions)
      padding-top: 8rem
      text-align: center
</style>
