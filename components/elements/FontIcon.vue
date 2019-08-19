<template lang="pug">
  font-awesome-icon(
    :icon="iconFromSet"
    :fixed-width="fixed"
  )
</template>

<script>
export default {
  name: 'FontIcon',

  props: {
    set: {
      type: String,
      default: 'regular',
    },
    icon: {
      type: String,
      required: true,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    iconFromSet () {
      return [`fa${this.set.charAt(0)}`, this.icon]
    },
  },
}
</script>
