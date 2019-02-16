<template>
  <v-app>
    <Nav
      :navColor = "'rgb(141,198,63)'"
    />
    <sub-nav
      v-show="false"
    />
    <nuxt />
    <Footer 
      :footerColor = "'rgb(141,198,63)'"
    />
  </v-app>
</template>

<script>
import Nav from '~/components/navigation/Nav';
import SubNav from '~/components/navigation/SubNav';
import Footer from '~/components/footer/Footer.vue';
import { auth } from '~/fb'

export default {
  components: {
    Nav,
    SubNav,
    Footer
  },
  beforeMount () {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('display_logout');
      } else {
        this.$store.commit('display_login');
      }
    });
  }
}
</script>


<style>
</style>
