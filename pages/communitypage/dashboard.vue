<template>
  <div id="content" class="mx-2">
    <aside>
      <v-layout column>
        <v-flex>
          <v-card flat>
            <v-toolbar 
              flat 
              color="primary"
              class="pa-2"
              dark 
              dense 
              
            >
              <v-text-field
                label="검색"
                prepend-icon="search"
                single-line
              ></v-text-field>
              

            </v-toolbar>

            <v-list two-line subheader>
              <v-subheader><v-icon>arrow_drop_up</v-icon>Folders</v-subheader>

              <v-list-tile
                v-for="item in items"
                :key="item.title"
                avatar
              >
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-divider class="mx-4"></v-divider>

              <v-subheader @click="test"><v-icon>arrow_drop_up</v-icon>Files</v-subheader>

              <v-list-tile
                v-for="item in items2"
                :key="item.title"
                avatar
              >
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>

                
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </aside>

    <main>
      <v-layout>
        <v-flex>
          <v-card flat>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">
                  Kangaroo Valley Safari
                </h3>
                <br />
                <Editor />
              </div>
            </v-card-title>
            

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </main>

    <!-- <v-container>
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
      
    </v-container> -->

  </div>
</template>

<script>
import { db } from '~/fb';
import Editor from '~/components/craft/Editor';

export default {
  layout: 'community',
  data () {
    return {
      projects: [],
      // dummy data
      items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
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
  components: {
    Editor
  },
  methods: {
    // state 'projects' change
    sortBy (val) {
      this.projects.sort((a,b) => {
        return a[val] < b[val] ? -1 : 1
      });
    },
    test () {
      alert('hey!')
    }
  }
  
}

// 여기 게시글 넣는 게시판으로 활용하면 좋겠다.

</script>

<style scoped>
@import url('~/assets/grid/dashboardGrid');


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

