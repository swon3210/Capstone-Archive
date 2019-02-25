<template>
  <div class="projects">
    <v-container>
      <v-layout wrap>

        <v-flex xs12>
          <v-card
            flat
            class="pa-2"
          >
            <v-layout column wrap class="mt-5">
              <v-flex>
                <h3 class="display-1"></h3>
                <v-text-field
                  class="mx-5"
                  label="제목"
                  single-line
                  prepend-icon="title"
                ></v-text-field>
                <v-select
                  v-model="value"
                  class="mx-5"
                  :items="items"
                  prepend-icon="category"
                  attach
                  chips
                  label="카테고리"
                  multiple
                ></v-select>
                <v-select
                  v-model="e6"
                  :items="states"
                  class="mx-5"
                  prepend-icon="work"
                  :menu-props="{ maxHeight: '400' }"
                  label="업무 할당"
                  multiple
                  hint="업무를 맡을 사람을 지정해주십시오"
                  persistent-hint
                ></v-select>
                <v-textarea
                  name="input-7-1"
                  prepend-icon="text_fields"
                  class="mx-5"
                  auto-grow
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
                <div class="pa-4">
                  <v-checkbox v-model="checkbox1" class="mx-5" label="할일 1"></v-checkbox>
                  <v-checkbox v-model="checkbox1" class="mx-5" label="할일 2"></v-checkbox>
                  <v-btn depressed flat class="ml-5" color="primary">업무 추가</v-btn>
                </div>
                <v-layout row wrap class="mx-5 pa-4">
                  <v-flex xs4>
                    <v-menu>
                      <v-text-field 
                        :value="formattedDate" 
                        slot="activator" 
                        label="시작일" 
                        prepend-icon="date_range"
                      >
                      </v-text-field>
                      <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs4>
                    <v-menu>
                      <v-text-field 
                        :value="formattedDate" 
                        slot="activator" 
                        label="완료일" 
                        prepend-icon="date_range"
                      >
                      </v-text-field>
                      <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs4>
                    <v-menu>
                      <v-text-field 
                        :value="formattedDate" 
                        slot="activator" 
                        label="(선택)중간점검" 
                        prepend-icon="date_range"
                      >
                      </v-text-field>
                      <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  
                  
                </v-layout>
                <v-btn depressed block color="primary">계획완료</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
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

        

        
      </v-layout>
      <!-- <v-expansion-panel>
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
      </v-expansion-panel> -->
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

