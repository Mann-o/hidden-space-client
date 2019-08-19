<template lang="pug">
  .main-footer-client-form
    h2 Are you a client?
    .main-footer-client-form__row
      input.input--light(type="text" placeholder="Name *" v-model="form.name")
    .main-footer-client-form__row
      input.input--light(type="email" placeholder="Email *" v-model="form.emailAddress")
    .main-footer-client-form__row
      input.input--light(type="text" placeholder="Phone Number *" v-model="form.phoneNumber")
    .main-footer-client-form__row
      textarea.input--light(name="message" placeholder="Message" v-model="form.message")
    .main-footer-client-form__row
      button.button.button--secondary(@click="submitClientForm") Submit
</template>

<script>
export default {
  name: 'MainFooterClientForm',

  data: () => ({
    form: {
      name: null,
      emailAddress: null,
      practice: null,
      message: null,
    },
  }),

  methods: {
    submitClientForm () {
      alert('hello!')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.main-footer-client-form

  h2
    color: #fff
    font-weight: 600
    font-size: 2.6rem

  +has(row)
    padding-bottom: 1rem

    &:last-of-type
      padding-top: 1rem

::placeholder
  color: #fff
</style>
