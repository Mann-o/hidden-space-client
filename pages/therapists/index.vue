<template lang="pug">
  div
    MainHeaderPageHeroContent(title="Our Therapists" :breadcrumbs="breadcrumbs")
    ModelPreviewList(v-if="therapists")
      ModelPreview(
        v-for="therapist in therapists"
        :key="therapist.id"
        route="therapists"
        :slug="therapist.slug"
        :imageUrl="therapist.profileImage.url"
        :title="`${therapist.firstName} ${therapist.lastName}`"
        :subtitle="therapist.title"
        :brief="therapist.shortBiography"
      )
</template>

<script>
export default {
  name: 'PageTherapistsIndex',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
    ModelPreview: () => import('@/components/cards/ModelPreview'),
    ModelPreviewList: () => import('@/components/cards/ModelPreviewList'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },

  data: () => ({
    therapists: null,
    breadcrumbs: [
      { label: 'Therapists' },
    ],
  }),

  // async asyncData ({ app, store }) {
  //   const { data: { data: { therapists } } } = await app.$axios.post(`${store.state.API_URL}/graphql`, {
  //     query: `{
  //       therapists {
  //         id,
  //         firstName,
  //         lastName,
  //         title,
  //         shortBiography,
  //         slug,
  //         profileImage {
  //           url,
  //         },
  //       },
  //     }`,
  //   })
  //   return { therapists }
  // },
}
</script>

<style lang="stylus" scoped>

</style>
