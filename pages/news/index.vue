<template lang="pug">
  .page-news
    MainHeaderPageHeroContent(title="News" :breadcrumbs="breadcrumbs")

    ModelPreviewList(v-if="posts")
      ModelPreview(
        v-for="post in posts"
        :key="post.id"
        route="news"
        :slug="post.slug"
        :imageUrl="post.image.url"
        :title="post.title"
        :subtitle="$options.filters.formatDate(post.created_at, 'dd/MM/yyyy')"
        :brief="post.content"
      )
</template>

<script>
export default {
  name: 'PageNews',

  components: {
    MainHeaderPageHeroContent: () => import('@/components/layout/main-header/MainHeaderPageHeroContent'),
    ModelPreview: () => import('@/components/cards/ModelPreview'),
    ModelPreviewList: () => import('@/components/cards/ModelPreviewList'),
  },

  data: () => ({
    posts: null,
    breadcrumbs: [
      { label: 'News' },
    ],
  }),

  // async asyncData ({ app, store }) {
  //   const { data: { data: { posts } } } = await app.$axios.post(`${store.state.API_URL}/graphql`, {
  //     query: `{
  //       posts {
  //         id,
  //         title,
  //         content,
  //         created_at,
  //         slug,
  //         image {
  //           url,
  //         },
  //       },
  //     }`,
  //   })
  //   return { posts }
  // },
}
</script>
