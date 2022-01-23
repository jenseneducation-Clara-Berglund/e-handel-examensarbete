<template>
  <div class="loginModalContainer" @click.self="$emit('close')">
    <div class="loginModal">
      <h1>
        Access to this site is restricted to invited users.<br />Please log in
        and access billions of beautiful hand bags
      </h1>
      <label v-if="registerMode" for="fullNameInput">Fullständigt namn</label>
      <input
        v-if="registerMode"
        id="fullNameInput"
        type="name"
        placeholder="Clara Berglund"
        v-model="fullNameInput"
      />
      <label for="emailInput">E-post</label>
      <input
        id="emailInput"
        type="email"
        placeholder="t.n@santassleigh.com"
        v-model="emailInput"
      />
      <label for="passwordInput">Lösenord</label>
      <input id="passwordInput" type="password" v-model="passwordInput" />
      <div
        :class="{
          loginButton: true,
          disabled: this.passwordInput === '' || this.emailInput === ''
        }"
        v-on:click="loginPressed()"
      >
        <p>LOGGA IN</p>
      </div>
      <div v-if="!registerMode" v-on:click="registerMode = true">
        Not a member? <u>Sign up!</u>
      </div>
      <div v-if="registerMode" v-on:click="registerMode = false">
        Already a member? <u>Sign in!</u>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {},
  data() {
    return {
      registerMode: false,
      emailInput: '',
      passwordInput: '',
      fullNameInput: ''
    }
  },
  methods: {
    async loginPressed() {
      if (this.registerMode) {
        await this.register({
          fullName: this.fullNameInput,
          email: this.emailInput,
          password: this.passwordInput
        })
      } else {
        await this.login({
          email: this.emailInput,
          password: this.passwordInput
        })
      }
    },
    ...mapActions(['login', 'register'])
  },
  components: {}
}
</script>

<style lang="scss">
@import '../styles/components/_loginModal.scss';
</style>
