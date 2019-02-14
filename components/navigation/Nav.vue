<template>
<v-toolbar dark color="primary">
  <v-toolbar-side-icon></v-toolbar-side-icon>
  <v-toolbar-title>Title</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat>Link One</v-btn>
    <v-btn flat>Link Two</v-btn>
    <v-btn flat>Link Three</v-btn>
  </v-toolbar-items>
</v-toolbar>

<!-- <nav class="navbar navbar-dark navbar-expand navigation-clean" :style="{'backgroundColor': navColor}">
  <div class="container">
    <nuxt-link class="navbar-brand text-light" :to = "'/'">SKKU Capstone</nuxt-link>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
      <span class="sr-only">Toggle navigation</span>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-light" id="navcol-1">
      <ul class="nav navbar-nav text-light ml-auto" style="padding-right: 0px;">
        <li class="nav-item" role="presentation" style="margin-right: 10px;">
          <nuxt-link to="/purposepage" class="nav-link">소개</nuxt-link>
        </li>
        <li class="nav-item" role="presentation" style="margin-right: 10px;">
          <nuxt-link to="/intropage" class="nav-link">About LIS-DS</nuxt-link>
        </li>
        <li class="nav-item" role="presentation" style="margin-right: 10px;">
          <nuxt-link to="/projectpage" class="nav-link">팀 프로젝트</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav> -->

</template>

<script>
export default {
  props: {
    navColor: {
      type: String,
      default: 'lightgreen'
    }
  }
}
</script>


<style scoped>
</style>
