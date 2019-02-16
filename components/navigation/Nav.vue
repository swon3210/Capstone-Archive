<template>
  <v-toolbar dark flat color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title><span class="font-weight-light">SKKU</span><span>CAPSTONE</span></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat color="white"><nuxt-link tag="a" class="nav-link text-white" to="/purposepage">소개</nuxt-link></v-btn>
      <v-btn flat color="white"><nuxt-link tag="a" class="nav-link text-white" to="/intropage">About LIS-DS</nuxt-link></v-btn>
      <v-btn flat color="white"><nuxt-link tag="a" class="nav-link text-white" to="/projectpage">팀 프로젝트</nuxt-link></v-btn>
      <v-btn flat color="white" @click="loginOrlogout">{{loginDisplay}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';
import { auth } from '~/fb'

export default {
  props: {
    navColor: {
      type: String,
      default: 'lightgreen'
    }
  },
  computed: {
    ...mapGetters(['loginDisplay'])
  },
  methods: {
    loginOrlogout () {
      if (this.$store.state.loginDisplay === 'Login') {
        this.$router.push('/communitypage/login');
      } else {
        auth.signOut().then(() => {this.$router.push('/')});
      }
    }
  }
}
</script>


<style scoped>
</style>
