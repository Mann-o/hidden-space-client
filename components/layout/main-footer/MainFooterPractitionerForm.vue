<template lang="pug">
  .main-footer-practitioner-form
    h2 Are you a practitioner?
    .main-footer-practitioner-form__row
      input.input--light(type="text" placeholder="Name *" v-model="form.name")
    .main-footer-practitioner-form__row
      input.input--light(type="email" placeholder="Email *" v-model="form.emailAddress")
    .main-footer-practitioner-form__row
      input.input--light(type="text" placeholder="What do you practice? *" v-model="form.practice")
    .main-footer-practitioner-form__row
      textarea.input--light(name="message" placeholder="Message" v-model="form.message")
    .main-footer-practitioner-form__row
      button.button.button--secondary(@click="submitPractitionerForm") Submit
</template>

<script>
export default {
  name: 'MainFooterPractitionerForm',

  data: () => ({
    form: {
      name: null,
      emailAddress: null,
      practice: null,
      message: null,
    },
  }),

  methods: {
    submitPractitionerForm () {
      alert('hello!')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.main-footer-practitioner-form
  padding-bottom: 8rem

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
