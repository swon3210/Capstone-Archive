<template>
  <div class="article-clean">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
          <div class="intro">
            <h1 class="text-center">{{introData.title}}</h1>
            <p class="text-center"><span class="by">by</span> <a href="#">{{introData.author}}</a><span class="date">{{introData.date}}</span></p><img class="img-fluid" :src="introData.image"></div>
          <div class="text">
            <vue-markdown class="text-justify lead mb-5" style="font-size: 10px;">{{introData.textarea}}</vue-markdown>
            <figure><img class="figure-img" :src="introData.image2">
              <figcaption>{{introData.caption}}</figcaption>
            </figure>
            <vue-markdown class="text-justify lead mb-5" style="font-size: 10px;">{{introData.textarea2}}</vue-markdown>
            <!-- 왜 여기서만 폰트 사이즈가 안 먹히지 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/intropage', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
    }).then(res => {
      const introData = res.data.story.content;
      return { introData };
    })
  },
  components: {
    VueMarkdown
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>

<style scoped>


</style>
