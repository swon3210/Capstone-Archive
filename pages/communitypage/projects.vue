<template>
  <div class="projects">
    <h1 class="subheading grey--text ">Projects</h1>
    <v-container>
      <v-layout wrap>
        <v-flex
          xs12
          class="mb-3"
        >
          <v-sheet height="500">
            <v-calendar
              ref="calendar"
              v-model="start"
              :type="type"
              :end="end"
              color="primary"
            ></v-calendar>
          </v-sheet>
        </v-flex>

        <v-flex
          sm4
          xs12
          class="text-sm-left text-xs-center"
        >
          <v-btn @click="$refs.calendar.prev()">
            <v-icon
              dark
              left
            >
              keyboard_arrow_left
            </v-icon>
            Prev
          </v-btn>
        </v-flex>
        <v-flex
          sm4
          xs12
          class="text-xs-center"
        >
          <v-select
            v-model="type"
            :items="typeOptions"
            label="Type"
          ></v-select>
        </v-flex>
        <v-flex
          sm4
          xs12
          class="text-sm-right text-xs-center"
        >
          <v-btn @click="$refs.calendar.next()">
            Next
            <v-icon
              right
              dark
            >
              keyboard_arrow_right
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
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
      projects: [],
      // dummy data
      type: 'month',
      start: '2019-01-01',
      end: '2019-01-06',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: '4 Day', value: '4day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
        { text: 'Custom Daily', value: 'custom-daily' },
        { text: 'Custom Weekly', value: 'custom-weekly' }
      ]
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

