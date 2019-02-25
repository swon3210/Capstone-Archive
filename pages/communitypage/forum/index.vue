<template>
  <v-container>
    <v-layout row wrap justify-space-between>
      <v-flex xs6 sm2 class="py-2">
        <div class="text-xs-center">
          <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              flat
            >
              <v-icon left>playlist_add</v-icon>
              글 작성
              
            </v-btn>
            <v-list class="pa-0" v-for="(item, index) in addButtons"
                :key="index">
              
              <v-btn block flat class="ma-0">{{ item }}</v-btn>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
      <v-flex xs6 sm2 class="py-2">
        <div class="text-xs-center">
          <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
              flat
            >
              <v-icon left>sort</v-icon>
              분류

            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(item, index) in sortButtons"
                :key="index"
              >
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
    </v-layout>
    <ForumForm 
      v-show="!participateMode"
    />
    <v-expansion-panel
      v-show="participateMode"
      expand
    >
      <v-expansion-panel-content
        expand-icon=""
        v-for="project in projects" 
        :key="project.id"
        :class="`pa-2 project ${project.status}`"
      >
        <div slot="header">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <div class="caption grey--text">Title</div>
              <div>{{project.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Author</div>
              <div>{{project.author}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Date</div>
              <div>{{project.due}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="right">
                <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
              </div>
            </v-flex>
          </v-layout>
        </div>
        <v-card flat class="pa-4">
          <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sed maxime dignissimos magnam ipsam minus deleniti quidem consequatur ea? Recusandae vero quis autem explicabo deleniti facere soluta necessitatibus harum aspernatur.</p>          
          <v-btn depressed color="primary" class="right" @click="participate">참여하기</v-btn>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import { db } from '~/fb';
import ForumForm from '~/components/community/ForumForm';


export default {
  layout: 'community',
  data () {
    return {
      layout: 'community',
      projects: [],
      addButtons: ['hey', 'there'],
      sortButtons: ['hey', 'there'],
      participateMode: true
    }
  },
  components: {
    ForumForm
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
    participate () {
      this.participateMode = !this.participateMode
    }
  }
}
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
