<template lang="pug">
  .get-in-touch-form

    h2 Get in Touch

    ul.get-in-touch-form__tabs
      li.get-in-touch-form__tab(
        @click="updateActiveTab('practitioners')"
        :class="{ 'get-in-touch-form__tab--active': (activeTab === 'practitioners') }"
      ) Practitioners
      li.get-in-touch-form__tab(
        @click="updateActiveTab('clients')"
        :class="{ 'get-in-touch-form__tab--active': (activeTab === 'clients') }"
      ) Clients

    .get-in-touch-form__content(v-if="activeTab === 'practitioners'")
      form.get-in-touch-form__fields
        .get-in-touch-form__field
          input(type="text" placeholder="Name *" v-model="practitionersForm.name")
        .get-in-touch-form__field
          input(type="email" placeholder="Email Address *" v-model="practitionersForm.emailAddress")
        .get-in-touch-form__field
          input(type="text" placeholder="What do you practice? *" v-model="practitionersForm.practice")
        .get-in-touch-form__field
          textarea(name="message" placeholder="Message" v-model="practitionersForm.message")
        .get-in-touch-form__field
          button(class="button button--secondary" type="submit" @click="handleForm($event)") Submit

    .get-in-touch-form__content(v-if="activeTab === 'clients'")
      p Clients
</template>

<script>
export default {
  name: 'GetInTouchForm',

  data: () => ({
    activeTab: 'practitioners',
    practitionersForm: {
      name: null,
      emailAddress: null,
      practice: null,
      message: null,
    },
  }),

  methods: {
    updateActiveTab (tab) {
      this.activeTab = tab
    },
    handleForm (e) {
      e.preventDefault()
      console.log(this.practitionersForm)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.get-in-touch-form
  display: block
  padding-bottom: 8rem

  +has(tabs)
    display: grid
    grid-template-columns: 1fr 1fr

  +has(tab)
    display: block
    padding: 2rem
    text-align: center
    cursor: pointer
    background-color: $brand-primary
    color: #fff
    font-weight: 600

    +is(active)
      background-color: #eae8ed
      color: $brand-primary

  +has(content)
    background-color: #eae8ed
    padding: 2rem

  +has(field)
    position: relative

    &:not(:first-child)
      margin-top: 1.8rem

    &:last-child
      margin-top: 2.2rem

    input,
    textarea
      display: block
      height: 100%
      width: 100%
      padding: 1rem 0
      background-color: #eae8ed
      border: none
      border-bottom: 1px solid #9a9899
      font-size: 1.2rem
      font-weight: 600
      color: #9a9899
      transition: all 0.2s
</style>
