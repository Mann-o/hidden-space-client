<template lang="pug">
  .main-header-page-hero-content
    Portal(to="title")
      h1 {{ title}}
    Portal(to="breadcrumbs")
      ul
        li
          nuxt-link(to="/")
            FontIcon(icon="home" set="solid")
        li(v-for="(crumb, index) in breadcrumbs" :key="index")
          nuxt-link(v-if="crumb.to" :to="crumb.to") {{ crumb.label }}
          span(v-else) {{ crumb.label }}
</template>

<script>
export default {
  name: 'MainHeaderPageHeroContent',

  props: {
    title: {
      type: String,
      required: true,
    },
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
}
</script>
