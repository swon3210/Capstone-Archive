<template>
  <div v-editable="projectDetailData">
    <ProjectDetail 
      :projectDetailData = "projectDetailData"
    />
  </div>
</template>

<script>
import ProjectDetail from '~/components/projectContent/ProjectDetail';

export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/projectpage/' + context.params.project, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
    }).then(res => {
      const projectDetailData = res.data.story.content;
      return { projectDetailData };
    })
  },
  components: {
    ProjectDetail
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
@import url('~/assets/css/Team-Boxed.css');
</style>
