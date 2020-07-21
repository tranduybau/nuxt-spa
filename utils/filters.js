import Vue from 'vue'

Vue.filter('lower', (val) => {
  return val.toUpperCase()
})

Vue.filter('upper', (val) => {
  return val.toUpperCase()
})

Vue.filter('slugify', (val) => {
  // For more information, visit https://www.npmjs.com/package/slug
  var slug = require('slug')
  return slug(val)
})
