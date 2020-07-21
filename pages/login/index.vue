<template>
  <div class="container">
    <h1 class="text-purple">
      {{ $t('login.title') }}
    </h1>
    <div>
      <FormWrapper @onSubmit="postLogin">
        <InputWrapper rules="required|email">
          <!--  -->
          <b-form-input
            v-model="form.email"
            type="email"
            :placeholder="$t('login.email')"
          ></b-form-input>
        </InputWrapper>
        <InputWrapper rules="required">
          <b-form-input
            v-model="form.password"
            type="password"
            :placeholder="$t('login.password')"
          ></b-form-input>
        </InputWrapper>
        <b-button variant="purple" type="submit">
          {{ $t('login.button') }}
        </b-button>
      </FormWrapper>
    </div>
  </div>
</template>

<script>
import { FormWrapper, InputWrapper } from '~/components/common'
export default {
  // Back to home if you've already been authenticated
  middleware: 'authNotRequired',
  components: {
    FormWrapper,
    InputWrapper
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async postLogin() {
      await this.$store.dispatch('login', this.form)
      this.$router.push('/')
    }
  }
}
</script>
