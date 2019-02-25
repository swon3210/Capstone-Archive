<template>
  <section id="portfolio" class="content-section">
    <div class="container">
      <div class="content-section-heading text-center">
        <h3 class="text-secondary mb-0">포트폴리오</h3>
        <h2 class="mb-5">프로젝트 소개</h2>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6" v-for="portfolio in portfolioData" :key="portfolio._uid">
          <nuxt-link to="projectpage" class="portfolio-item">
            <div class="caption">
              <div class="caption-content">
                <h2>{{portfolio.title}}<br></h2>
                <p class="mb-0" style="font-size: 12px;">{{portfolio.text}}<br></p>
              </div>
            </div><img class="img-fluid" :src="portfolio.thumnail">
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    portfolioData: {
        type: Array,
        default: []
    }
  }
}
</script>

<style scoped>
@import url('~/assets/css/bootstrap.min.css');

</style>

