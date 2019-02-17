<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container>
      <v-card flat v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Author</div>
            <div>{{project.author}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider />
      </v-card>
      
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
  methods: {
    // state 'projects' change
    sortBy (val) {
      this.projects.sort((a,b) => {
        return a[val] < b[val] ? -1 : 1
      });
    }
  }
}

// 여기 게시글 넣는 게시판으로 활용하면 좋겠다.

</script>

<style scoped>

.project.complete {
  border-left: 4px solid #3cd1c2
}

.project.ongoing {
  border-left: 4px solid orange
}

.project.overdue {
  border-left: 4px solid tomato
}

.v-chip.complete {
  background: #3cd1c2
}

.v-chip.ongoing {
  background: orange
}

.v-chip.overdue {
  background: tomato
}


</style>

