<template lang="pug">
  .page-terms-and-conditions
    MainHeaderPageHeroContent(title="Terms and Conditions" :breadcrumbs="breadcrumbs")
</template>

<script>
export default {
  name: 'PageTermsAndConditions',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    breadcrumbs: [
      { label: 'Terms & Conditions' },
    ],
  }),
}
</script>
