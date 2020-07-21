<template>
  <b-modal id="sign-in-modal" title="Sign in to access the secret page">
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
    <template v-slot:modal-footer>
      <span></span>
    </template>
  </b-modal>
</template>
<script>
export default {
  components: {
    FormWrapper: () =>
      import('~/components/common/Templates/Form/FormWrapper.vue'),
    InputWrapper: () =>
      import('~/components/common/Templates/Form/InputWrapper.vue')
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  // Back to home if you've already been authenticated
  methods: {
    async postLogin() {
      await this.$store.dispatch('login', this.form)
      this.$root.$emit('bv::hide::modal', 'sign-in-modal', '#focusThisOnClose')
    }
  }
}
</script>
