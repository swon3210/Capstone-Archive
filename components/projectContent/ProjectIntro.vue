<template>
  <div class="row projects">
    <div class="col-sm-12 item">
      <div class="row">
        <div class="col-md-12 col-lg-4"><nuxt-link :to="projectData.full_slug"><img :src="projectData.content.image" class="img-fluid"></nuxt-link ></div>
        <div class="col">
          <h3 class="name">{{projectData.content.projectName}}</h3>
          <p class="description" style="font-size: 12px;">{{projectData.content.summary}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectData: {
      type: Object,
      default: {}
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
@import url('~/assets/css/bootstrap.min.css');

</style>
