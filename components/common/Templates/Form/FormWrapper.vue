<template>
  <ValidationObserver v-slot="{ passes }">
    <b-form @submit.prevent="passes(submitForm)">
      <slot></slot>
    </b-form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
export default {
  name: 'FormWrapper',
  components: {
    ValidationObserver
  },
  methods: {
    submitForm() {
      this.$emit('onSubmit')
    }
  }
}
</script>
