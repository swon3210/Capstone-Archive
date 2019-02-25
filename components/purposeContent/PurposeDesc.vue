<template>
  <section id="about" class="content-section bg-light" style="background-color: rgb(255,255,255);padding-top: 0px;padding-bottom: 0px;">
    <div class="container-fluid text-center"  style="background-color: #ffffff;">
      <div class="row" style="margin-top: 100px;filter: blur(0px) contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) sepia(0%);">
        <div class="col-sm-12 col-md-10 col-lg-3 col-xl-3 offset-lg-1 offset-xl-1 mx-auto m-sm-auto m-md-auto mx-lg-auto mx-xl-auto" style="padding: 0;"><img :src="descData.leftImage" width="100%" height="100%"></div>
        <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 mx-auto m-sm-auto m-md-auto mx-lg-auto mx-xl-auto" style="padding: 30px;padding-top: 30px;padding-bottom: 0px;">
          <h2 class="text-left d-lg-flex justify-content-lg-start">{{descData.leftHeading}}<br></h2>
          <vue-markdown class="text-justify lead mb-5" style="font-size: 15px;">{{descData.leftDescription}}</vue-markdown>
        </div>
      </div>
      <div class="row" style="margin-top: 100px;">
        <div class="col-sm-12 col-md-10 col-lg-7 col-xl-7 offset-lg-1 offset-xl-1 mx-auto order-sm-3 m-sm-auto order-md-3 m-md-auto order-lg-1 mx-lg-auto order-xl-1 mx-xl-auto" style="padding: 30px;padding-top: 30px;padding-bottom: 0px;">
          <h2 class="text-left d-lg-flex justify-content-lg-start">{{descData.rightHeading}}<br></h2>
          <vue-markdown class="text-justify lead mb-5" style="font-size: 15px;">{{descData.rightDescription}}</vue-markdown>
        </div>
        <div class="col-sm-12 col-md-10 col-lg-3 col-xl-3 offset-0 order-sm-1 order-md-1 m-md-auto order-lg-3 order-xl-3" style="padding: 0;margin-top: 0px;"><img :src="descData.rightImage" width="100%" height="100%"></div>
      </div>
    </div>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  props: {
    descData: {
      type: Object,
      default: []
    }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style scoped>
@import url('~/assets/css/bootstrap.min.css');
</style>
