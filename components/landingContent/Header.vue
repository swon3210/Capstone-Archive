<template>
  <header class="d-flex masthead" :style="{'backgroundImage': 'url(' + headerData.image + ')'}">
    <div class="container my-auto text-center">
      <h1 class="text-light mb-1">{{headerData.heading}}</h1>
      <h3 class="mb-5"><em class="text-white">{{headerData.text}}</em></h3><nuxt-link class="btn btn-dark border-light btn-xl js-scroll-trigger" role="button" to="/purposepage" style="background-color: transparent;">자세히 알아보기</nuxt-link>
      <div class="overlay"></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    headerData: {
      type: Object,
      default: {}
    }
  },
  mounted() {
  },
}
</script>

<style>
@import url('~/assets/css/bootstrap.min.css');
</style>
