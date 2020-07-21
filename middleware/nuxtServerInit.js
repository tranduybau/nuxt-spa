export default async function({ store }) {
  // console.log(store.state.message)
  if (!store.state.serverReady) {
    await store.dispatch('nuxtServerInit')
  }
}
