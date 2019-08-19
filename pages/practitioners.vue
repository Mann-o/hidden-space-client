<template lang="pug">
  .page-practitioners
    MainHeaderPageHeroContent(title="Practitioners" :breadcrumbs="breadcrumbs")
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
