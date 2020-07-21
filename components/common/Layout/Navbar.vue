<template>
  <!-- Checkout the variants customization bootstrap-vue/variants folder -->
  <b-navbar toggleable="lg" type="dark" variant="purple">
    <b-navbar-brand>
      <nuxt-link to="/" style="text-decoration: none">
        {{ $t('home.navbar') }}
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link to="/introduction" class="text-light">
          Introduction
        </nuxt-link>
        <nuxt-link to="/secret" class="text-light ml-3">
          Secret page
        </nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Fix DOM mismatch between client-side and server-side -->
        <client-only>
          <!-- Login button -->
          <b-button
            v-if="$store.state.auth && $route.path != '/login'"
            size="sm"
            class="mr-3"
            style="border-radius: 2rem"
            variant="danger"
            @click="$store.dispatch('logout')"
            :title="$t('navbar.logout')"
          >
            <fa class="text-light" :icon="['fas', 'sign-in-alt']" />
          </b-button>
          <b-button
            v-if="!$store.state.auth && $route.path != '/login'"
            size="sm"
            class="mr-3"
            style="border-radius: 2rem"
            variant="success"
            @click="
              $root.$emit(
                'bv::show::modal',
                'sign-in-modal',
                '#focusThisOnClose'
              )
            "
            :title="$t('navbar.login')"
          >
            <fa class="text-light" :icon="['fas', 'sign-in-alt']" />
          </b-button>
          <!-- i18n button -->
          <b-button
            v-if="locale == 'en'"
            size="sm"
            style="border-radius: 2rem"
            variant="danger"
            @click="changeLanguage('vi')"
          >
            <fa class="text-warning" :icon="['fas', 'globe-asia']" />
          </b-button>
          <b-button
            v-if="locale == 'vi'"
            size="sm"
            style="border-radius: 2rem"
            variant="primary"
            @click="changeLanguage('en')"
          >
            <fa :icon="['fas', 'globe-asia']" />
          </b-button>
        </client-only>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState({
      locale: (state) => state.locale
    })
  },
  methods: {
    ...mapMutations({
      SET_LANG: 'SET_LANG'
    }),
    changeLanguage(locale) {
      this.SET_LANG(locale) // store in state and localStorage
      this.$i18n.locale = locale // live change on website
    }
  }
}
</script>
