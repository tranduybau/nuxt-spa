<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules">
    <slot></slot>
    <div class="text-danger mb-3">
      {{ $t(errors[0]) }}
    </div>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'InputWrapper',
  components: {
    ValidationProvider
  },
  props: {
    rules: {
      type: String,
      default: ''
    }
  }
}
</script>
