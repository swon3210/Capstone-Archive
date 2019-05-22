<template>
  <v-img
    :src="photoURL"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3 white--text">{{name}}</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data () {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    }
  },
  props: {
    name: {
      type: String,
      default: 'name'
    },
    email: {
      type: String,
      default: ''
    },
    photoURL: {
      type: String,
      default: ''
    }
  },
  mounted () {
    console.log('photo')
  }
}
</script>

<style scoped>

</style>
