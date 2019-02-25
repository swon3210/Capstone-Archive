<template>
  <div v-editable="pageData.content">
    <header class="d-flex masthead" :style="{'backgroundImage': 'url(' + pageData.content.image + ')', 'backgroundSize': 'cover'}">
      <div class="container my-auto text-center">
        <h1 class="text-light mb-1">{{pageData.content.heading}}</h1>
        <h3 class="mb-5"><em class="text-white">{{pageData.content.description}}</em></h3><a class="btn btn-dark border-light btn-xl js-scroll-trigger" role="button" href="#about" style="background-color: transparent;">Find Out More</a>
        <div class="overlay"></div>
      </div>
    </header>
    <div class="projects-horizontal">
      <div class="container">
        <ProjectIntro 
          v-for = "project in projects"
          :key = "project.id"
          :projectData = "project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectIntro from '~/components/projectContent/ProjectIntro'

export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'projectpage/'
    }).then(res => {

      const pageData = res.data.stories.find(x => x.name === "page");

      const projects = res.data.stories.filter(x => x.name !== 'page');
      
      return {
        pageData,
        projects
      }
    })
  },
  components: {
    ProjectIntro
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
@import url('~/assets/css/bootstrap.min.css');
@import url('~/assets/css/Projects-Horizontal.css');
</style>

