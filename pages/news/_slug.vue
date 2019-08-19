<template lang="pug">
  div
    MainHeaderPageHeroContent(:title="post.title" :breadcrumbs="breadcrumbs")

    div(v-html="$md.render(post.content)")
</template>

<script>
export default {
  name: 'PageNewsSlug',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
  },

  data: () => ({
    post: null,
  }),

  computed: {
    breadcrumbs () {
      return [
        { to: '/news', label: 'News' },
        { label: this.post.title },
      ]
    },
  },
}
</script>
