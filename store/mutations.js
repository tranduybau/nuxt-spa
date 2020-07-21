export default {
  // Communicate with Devtools
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    }
  },
  SET_SERVER_STATE(state, serverReady) {
    state.serverReady = serverReady
  },
  SET_AUTH(state, auth) {
    state.auth = auth
  }
}
