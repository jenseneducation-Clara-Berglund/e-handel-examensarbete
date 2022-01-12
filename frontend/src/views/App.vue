<template>
  <div id="app">
  <Nav @cart-btn-clicked="goToCart"
     @profile-btn-clicked="goToProfile"
     @logo-btn-clicked="goToHome"/>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  methods: {
    goToHome() {
        this.$router.replace("/");
        console.log("hej")
    },
    goToCart(){
      this.$router.push("/cart");
    },
    
    goToProfile(){
      this.$router.push("/profile");
    },
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex: 1;
  width: 100%;
  height: 100%;
}

body,
html {
  width: 100%;
  height: 100%;
}
</style>
