<template lang="pug">
  .page-sitemap
    MainHeaderPageHeroContent(title="Sitemap" :breadcrumbs="breadcrumbs")
</template>

<script>
export default {
  name: 'PageSitemap',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    breadcrumbs: [
      { label: 'Sitemap' },
    ],
  }),
}
</script>
