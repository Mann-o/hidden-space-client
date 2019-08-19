<template lang="pug">
  div
    MainHeaderPageHeroContent(:title="`${therapist.firstName } ${therapist.lastName}`" :breadcrumbs="breadcrumbs")
</template>

<script>
export default {
  name: 'PageTherapistsSlug',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    therapist: null,
  }),

  computed: {
    breadcrumbs () {
      return [
        { to: '/therapists', label: 'Therapists' },
        { label: this.therapist.firstName },
      ]
    },
  },
}
</script>
