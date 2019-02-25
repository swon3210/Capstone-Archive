<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '~/components/community/Navbar'
import { auth } from '~/fb'

export default {
  name: 'App',
  components: {
    Navbar
  },
  beforeMount () {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('display_logout');
        user.getIdTokenResult().then(idTokenResult => {
          this.$store.commit('init_idTokenResult', idTokenResult);
          localStorage.setItem('idTokenResult', JSON.stringify(idTokenResult));

          // 이렇게만 하면 만료상태가 작동하지 않는다.

        });
      } else {
        this.$store.commit('display_login');
      }
    });
  },
  data () {
    return {
      //
    }
  }
}
</script>
