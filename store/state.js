// VueX-State
export default () => ({
  serverReady: false,
  locales: ['en', 'vi'],
  locale: 'en',
  message: 'Hello from state',
  // Auth instance got from api server
  auth: null
})
