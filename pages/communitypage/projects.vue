<template>
  <div class="projects">
    <h1 class="subheading grey--text ">Projects</h1>
    <v-container>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.id">
          <div slot="header">{{project.title}}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">
                {{project.due}}
              </div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
    
  </div>
  
</template>

<script>
import { db } from '~/fb'

export default {
  layout: 'community',
  data () {
    return {
      projects: []
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({...change.doc.data(), id: change.doc.id});
        } 
      })
    }, err => console.log(err.message));
  },
  computed: {
    myProjects () {
      return this.projects;
    }
  }
}
</script>

<style scoped>

</style>

