<template>
  <section id="services" class="content-section text-white text-center" style="background-color: rgb(141,198,63);">
    <div class="container">
      <div class="content-section-heading">
          <h2 class="mb-5">분야별 소개</h2>
      </div>
      <div class="row">
        <div v-for = "data in introData" :key="data._uid" class="col-md-6 col-lg-3 mb-5 mb-lg-0"><span class="mx-auto service-icon rounded-circle mb-3"><i :class="'icon ' + data.icon" style="font-size: 40px;color: rgb(141,198,63);"></i></span>
          <h4><strong>{{data.heading}}</strong></h4>
          <p class="text-center mb-0 text-faded" style="font-size: 14px;">{{data.text}}<br></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    introData: {
      type: Array,
      default: []
    }
  },
  mounted() {
  },
}
</script>

<style scoped>

</style>


