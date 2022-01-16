<template>
  <div id="app">
    <Nav
      @cart-btn-clicked="goToCart"
      @profile-btn-clicked="goToProfile"
      @logo-btn-clicked="goToHome"
    />
    <div style="display: flex; flex: 1; justify-content: center">
      <router-view />
    </div>
    <Footer
      @cart-btn-clicked="goToCart"
      @profile-btn-clicked="goToProfile"
      @logo-btn-clicked="goToHome"
    />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  methods: {
    goToHome() {
      this.$router.replace('/')
      console.log('hej')
    },
    goToCart() {
      this.$router.push('/cart')
    },

    goToProfile() {
      this.$router.push('/profile')
    }
  }
}
</script>

<style>
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #89a07e;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body,
html {
  width: 100%;
  height: 100%;
}
</style>
