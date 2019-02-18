<template>
  <div v-editable="pageData">
    <header class="d-flex masthead" :style="{'background-image': 'url(' + pageData.image + ')'}">
      <div class="container my-auto text-center">
        <h1 class="text-light mb-1" style="font-size: 60px;">{{pageData.heading}}</h1>
        <p class="mb-5 text-white">{{pageData.subHeading}}</p><a class="btn btn-light btn-sm btn-xl js-scroll-trigger" role="button" href="#about">알아보기</a>
        <div class="overlay"></div>
      </div>
    </header>
    <section id="about" class="content-section bg-light" style="background-color: rgb(255,255,255);padding-top: 0px;padding-bottom: 0px;">
      <div class="container-fluid text-center" style="background-color: #ffffff;">
        <PurposeDesc 
          v-for = "descData in pageData.descriptions" 
          :key = "descData._uid" 
          :descData = "descData"
        />
      </div>
    </section>
    <section class="index-howto-alt py-3" style="margin-top: 100px;">
      <div class="container">
        <h2 class="text-center mb-3">연도별 나열</h2>
        <div class="psd-line pos-rel" style="position:relative;">
          <HistoryBlock 
            v-for = "historyData in pageData.histories"
            :key = "historyData._uid"
            :historyData = "historyData"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PurposeDesc from '~/components/purposeContent/PurposeDesc.vue';
import HistoryBlock from '~/components/purposeContent/HistoryBlock.vue';

export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/purposepage', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      // starts_with: 'landing/' 이러면 폴더 안의 데이터들을 담은 배열 반환. 그러나 하나의 객체만 얻고 싶다면 이거 쓰지 말것(루트 엔트리의 데이터만)
    }).then(res => {
      const pageData = res.data.story.content;
      return {
        pageData
      }
    });
  },
  components: {
    PurposeDesc,
    HistoryBlock,
  },
  mounted() {
    console.log(this.pageData);
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  },
}
</script>

<style scoped>
@import url('~/assets/css/Side-By-Side-Section.css');
</style>