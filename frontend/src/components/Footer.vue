<template>
  <div id="footer">
    <div class="footerPartContainer">
      <a href=""><h3>©claraberglund AB 2022</h3></a>
      <a href=""><h3>Användarvillkor</h3></a>
      <a href=""><h3>Integritetspolicy</h3></a>
    </div>
    <div class="footerPartContainer">
      <a href="mailto:hello@bagz.se"><h3>hello@bagz.se</h3></a>
      <a href="tel:+467123456789"><h3>(+46) 08 702 00 90</h3></a>
      <a href="www.facebook.com"><h3>Fråga oss på messenger!</h3></a>
    </div>
    <div id="footerPartContainer"></div>
  </div>
</template>

<script>
// import Logo from "@/components/Logo.vue";
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['cart'])
}
</script>

<style lang="scss">
@import '../styles/components/_footer.scss';
</style>
