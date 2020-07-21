<template>
  <b-container fluid class="p-0">
    <Navbar />
    <nuxt />
    <Login />
    <Footer />
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { Login, Navbar, Footer } from '~/components/common'
export default {
  components: {
    Login,
    Navbar,
    Footer
  },
  methods: {
    ...mapMutations({
      SET_LANG: 'SET_LANG'
    })
  },
  created() {
    // We store this configuration in localStorage because it lasts forever
    this.$i18n.locale = localStorage.getItem('locale')
    this.SET_LANG(localStorage.getItem('locale')) // store in state and localStorage
  }
}
</script>
