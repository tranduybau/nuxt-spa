import { extend } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

// Override the default message.
// In i18n format
// Actual messages are inside locale files
extend('email', {
  ...email,
  message: 'validate.email'
})

extend('required', {
  ...required,
  message: 'validate.required'
})
