<template>
  <v-jumbotron
    :gradient="gradient"
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">{{name}}</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
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
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>

</style>
