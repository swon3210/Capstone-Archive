<template>
<div>
  <div class="row align-items-center">
    <div class="col-12 col-sm-6 d-flex flex-row justify-content-center align-items-center intro-card-3 p-5">
      <img :src="historyData.rightImage" class="howto-img">
      
    </div>
    <div class="col-12 col-sm-6 d-flex flex-column justify-content-center p-5 psd-left2">
      <h5 class="text-left">{{historyData.rightYear}}</h5>
      <p class="m-0 text-center text-sm-left">{{historyData.rightDescription}}<br></p>
    </div>
  </div>
  <div class="row flex-column-reverse align-items-center flex-sm-row">
    <div class="col-12 col-sm-6 d-flex flex-column justify-content-center p-5 psd-right2">
      <h5 class="text-right">{{historyData.leftYear}}</h5>
      <p class="m-0 text-center text-sm-right">{{historyData.leftDescription}}<br></p>
    </div>
    <div class="col-12 col-sm-6 d-flex flex-row justify-content-center align-items-center intro-card-4 p-5"><img :src="historyData.leftImage"  class="howto-img">
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    historyData: {
      type: Object,
      default: []
    }
  }
}
</script>

<style scoped>
@import url('~/assets/css/bootstrap.min.css');
@import url('~/assets/css/Side-By-Side-Section.css');

</style>
