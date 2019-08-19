<template lang="pug">
  .main-footer-newsletter-signup
    h2 Sign up to our Newsletter
    .main-footer-newsletter-signup__form
      input.input--light(type="email" placeholder="Email *" v-model="form.emailAddress")
      button.button.button--white(@click="submitNewsletterSignupForm") Sign Up
</template>

<script>
export default {
  name: 'MainFooterNewsletterSignup',

  data: () => ({
    form: {
      emailAddress: null,
    },
  }),

  methods: {
    submitNewsletterSignupForm () {
      alert('hello!')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.main-footer-newsletter-signup
  margin-top: -8rem
  padding-bottom: 8rem

  h2
    color: #fff
    font-size: 2.6rem
    font-weight: 600

  +has(form)
    display: grid
    grid-template-columns: 2fr 1fr
    grid-gap: 2rem

::placeholder
  color: #fff
</style>
