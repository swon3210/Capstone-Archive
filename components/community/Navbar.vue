<template>
  <nav>
    <v-snackbar v-model="snackbar" top color="success">
      <span>You added a new project</span>
      <v-btn flat color="white" @click="remove_snackbar">Close</v-btn>
    </v-snackbar>
    <v-navigation-drawer
      fixed
      v-model="drawerRight"
      left
      clipped
      app
      width="230"
    >
      <v-container>
        <v-layout column justify-center>
          <v-flex>
            <v-btn round large depressed block @click.stop="left = !left" color="primary">CLICK</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider />
      <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-tile-action>
          <v-icon>{{link.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{link.text}}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="isAdmin" to="/communitypage/admin">
        <v-list-tile-action>
          <v-icon>account_box</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Admin
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar
      class="myToolbar"
      fixed
      flat
      app
      clipped-left
    >
      <v-toolbar-title class="mx-3"><span class="font-weight-light primary--text">SKKU</span><span class="grey--text text--darken-1">CAPSTONE</span></v-toolbar-title>
      <v-divider 
        vertical
        class="ml-3"
      />
        <v-icon class="grey--text text--darken-1 mx-3" @click.stop="drawerRight = !drawerRight">apps</v-icon>
        <v-btn class="grey--text text--darken-1" flat v-for="link in links" :key='link.text' router :to="link.route">
          
            {{link.text}}
          
        </v-btn>
      
      <v-spacer></v-spacer>
      <v-btn flat @click="login_or_logout" class="grey--text">
        <span>{{$store.getters.loginDisplay}}</span>
      </v-btn>
      
      <v-icon @click.stop="drawer = !drawer">chat</v-icon>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      right
      v-model="drawer"
      app
      width="230"
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      temporary
      v-model="left"
      fixed
      width="220"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar.jpg">
          </v-avatar>
          <p class="text-xs-center subheading mt-1">Song Won</p>
        </v-flex>
        <v-flex class="mt-1 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from './Popup'
import { mapGetters, mapMutations } from 'vuex';
import { auth } from '~/fb'

export default {
  data () {
    return {
      drawer: false,
      drawerRight: true,
      right: null,
      left: null,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/communitypage/dashboard'},
        { icon: 'folder', text: 'My Projects', route: '/communitypage/projects'},
        { icon: 'supervisor_account', text: 'Team', route: '/communitypage/team'},
        { icon: 'person', text: 'Profile', route: '/communitypage/profile'}
      ]
    }
  },
  computed: {
    ...mapGetters(['snackbar', 'isAdmin'])
  },
  components: {
    Popup
  },
  methods: {
    login_or_logout () {
      if (this.$store.state.loginDisplay === 'Login') {
        this.$router.push('/communitypage/login');
      } else {
        auth.signOut().then(() => {this.$router.push('/')});
      }
    },
    ...mapMutations([
      'create_snackbar',
      'remove_snackbar'
    ])
  }
}
</script>

<style scoped>
.myToolbar {
  background: white;
  border-bottom: 0.5px solid lightgrey;
}
</style>
