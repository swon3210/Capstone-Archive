<template>
  <div v-editable="pageData">
    <Header 
      :headerData = "pageData.header[0]"
    />
    <purpose-section 
      :purposeData = "pageData.purpose[0]"
    />
    <intro-section 
      :introData = "pageData.intro"
    />
    <portfolio-section 
      :portfolioData = "pageData.portfolio"
    />
  </div>
</template>

<script>
import Header from '~/components/landingContent/Header.vue';
import PurposeSection from '~/components/landingContent/PurposeSection.vue';
import IntroSection from '~/components/landingContent/IntroSection.vue';
import PortfolioSection from '~/components/landingContent/PortfolioSection.vue';


export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/landing', {
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
    Header,
    PurposeSection,
    IntroSection,
    PortfolioSection
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

