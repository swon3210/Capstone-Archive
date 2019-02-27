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
            <v-list class="pa-0">
              <v-btn block flat class="ma-0" color="info" @click="add_forum_post">질문</v-btn>
              <v-btn block flat class="ma-0" color="primary" @click="add_forum_post">토론</v-btn>
              <v-btn block flat class="ma-0" color="warning" @click="add_forum_post">토의</v-btn>
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
            <v-list class="pa-0">
              <v-btn block flat class="ma-0" color="info">질문</v-btn>
              <v-btn block flat class="ma-0" color="primary">토론</v-btn>
              <v-btn block flat class="ma-0" color="warning">토의</v-btn>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
    </v-layout>
    <ForumPost 
      v-show="participateMode"
      @go_back = "go_back"
      @to_forum_list = "to_forum_list"
      :mode = "mode"
      :postData = "postData"
    />
    <v-expansion-panel
      v-show="!participateMode"
      expand
    >
      <v-expansion-panel-content
        expand-icon=""
        v-for="post in forumPosts"
        :key="post.id"
        :class="`pa-2 project ongoing`"
      >
        <div slot="header">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <div class="caption grey--text">Title</div>
              <div>{{post.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Author</div>
              <div>{{post.authorName}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Date</div>
              <div>{{post.publishedDate}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="right">
                <v-chip small :class="`ongoing white--text caption my-2`">ongoing</v-chip>
              </div>
            </v-flex>
          </v-layout>
        </div>
        <v-card flat class="pa-4">
          <p class="mb-4">{{post.text}}</p>          
          <v-btn depressed color="primary" class="right" @click="participate(post)">참여하기</v-btn>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import { db } from '~/fb';
import ForumPost from '~/components/community/forum/ForumPost';


export default {
  layout: 'community',
  data () {
    return {
      forumPosts: [],
      mode: 'view',
      participateMode: false,
      postData: {}
    }
  },
  components: {
    ForumPost,
  },
  created() {
    db.collection('forums').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.forumPosts.push({...change.doc.data(), id: change.doc.id});
        }
      })
    }, err => console.log(err.message));
  },
  methods: {
    participate (data) {
      this.participateMode = true;
      this.postData = data;
    },
    add_forum_post () {
      this.participateMode = true
      this.mode = 'add';
    },
    go_back () {
      this.mode = 'view';
    },
    to_forum_list () {
      this.mode = 'view';
      this.participateMode = false;
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
