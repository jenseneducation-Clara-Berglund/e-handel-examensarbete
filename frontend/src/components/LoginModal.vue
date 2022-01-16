<template>
  <div class="loginModalContainer" @click.self="$emit('close')">
    <div class="loginModal">
      <h1>
        Access to this site is restricted to invited users.<br />Please log in
        and access billions of beautiful hand bags
      </h1>

      <label for="emailInput">E-post</label>
      <input id="emailInput" type="email" placeholder="t.n@santassleigh.com" />
      <label for="passwordInput">Lösenord</label>
      <input id="passwordInput" type="password" />
      <div class="loginButton">
        <p>LOGGA IN</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
@import '../styles/components/_loginModal.scss';
</style>
