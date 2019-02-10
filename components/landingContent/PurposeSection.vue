<template>
  <section id="about" class="content-section bg-light">
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h2>{{purposeData.heading}}</h2>
          <p class="text-center lead mb-5" style="font-size: 15px;">
            <span>{{purposeData.text}}</span>
          </p>
          <nuxt-link class="btn btn-light text-light btn-xl js-scroll-trigger"
            role="button" to="intropage" style="background-color: rgb(141,198,63);">소개 페이지
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    purposeData: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
