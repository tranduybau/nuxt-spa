import Vue from 'vue'
Vue.mixin({
  data() {
    return {
      mixinMessage: 'Hello from mixin'
    }
  },
  methods: {
    sayHello(name) {
      // eslint-disable-next-line
      console.log(`Hello ${name}, I'm printed from Vue-Mixin`)
    }
    // Add more global helpers here
  }
})
