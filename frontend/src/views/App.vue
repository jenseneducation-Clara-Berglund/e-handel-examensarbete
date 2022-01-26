<template>
  <div id="app">
    <Nav
      @cart-btn-clicked="goToCart"
      @profile-btn-clicked="goToProfile"
      @logo-btn-clicked="goToHome"
    />
    <div style="display: flex; ustify-content: center">
      <router-view />
    </div>
    <LoginModal v-if="this.userToken === null" />
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
import { mapGetters, mapActions } from 'vuex'
import LoginModal from '../components/LoginModal.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    LoginModal
  },
  computed: {
    ...mapGetters(['userToken'])
  },
  methods: {
    ...mapActions(['checkToken']),
    goToHome() {
      this.$router.replace('/')
    },
    goToCart() {
      this.$router.push('/cart')
    },

    goToProfile() {
      this.$router.push('/profile')
    }
  },

  async mounted() {
    await this.checkToken()
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
  background-color: #d8cec4;
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
