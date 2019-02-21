<template>
  <div id="content" class="mx-2">
    <aside>
      <v-layout column>
        <v-flex>
          <v-card flat>
            <v-toolbar 
              flat 
              color="primary lighten-1"
              class="pa-2"
              dark 
              dense 
              
            >
              <v-text-field
                label="검색"
                prepend-icon="search"
                single-line
              ></v-text-field>

              
              <v-icon @click="drop_down_and_up">
                {{dropdown}}
              </v-icon>
              
            </v-toolbar>

            <v-list 
              v-for="post in posts"
              :key="post.title"
              two-line subheader class="scrollbar" v-show="showList"
            >
              <v-subheader>
                <v-icon 
                  @click="post.show === true ? post.show = false : post.show = true"
                >
                  {{post.show === true ? 'arrow_drop_up' : 'arrow_drop_down' }}
                </v-icon>
                Folders
              </v-subheader>

              <v-list-tile
                v-show = "post.show"
                v-for="item in post.items"
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

            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </aside>

    <main>
      <v-layout>
        <v-flex>
          <v-card flat>

            <v-card-title primary-title class="mx-2">
              <Editor />
            </v-card-title>
          
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-spacer />
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
      dropdown: 'arrow_drop_up',
      showList: true,
      // dummy data
      posts: [
        { show: true, title: 'folders', items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ]}
      ],
      items: [
        
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
    drop_down_and_up () {

      if (this.dropdown === 'arrow_drop_down') {
        this.dropdown = 'arrow_drop_up';
        this.showList = true;
      } else {
        this.dropdown = 'arrow_drop_down';
        this.showList = false;
      }
    },
    test () {
      alert('hey!')
    }
  }
  
}

// 여기 게시글 넣는 게시판으로 활용하면 좋겠다.
// 모바일 모드에서는 main 과 aside를 하나씩 보여줘야 하는데 이거 구현하려면 css 변수 공부 해야겠다.
// 드랍다운은 하나 이상의 요소에 적용할 생각이라면 v-show로 구현해서는 안되겠군

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

.scrollbar {
  overflow-y: scroll;
  height: 400px;
}


</style>

<style>

</style>

