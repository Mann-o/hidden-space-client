<template lang="pug">
  .page-privacy-policy
    MainHeaderPageHeroContent(title="Privacy Policy" :breadcrumbs="breadcrumbs")
</template>

<script>
export default {
  name: 'PagePrivacyPolicy',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    breadcrumbs: [
      { label: 'Privacy Policy' },
    ],
  }),
}
</script>
