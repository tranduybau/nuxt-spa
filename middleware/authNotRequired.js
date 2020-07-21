export default function({ store, redirect }) {
  // If the user is authenticated, redirect to home page
  // This is especially made for /login
  if (store.state.auth) {
    return redirect('/')
  }
}
