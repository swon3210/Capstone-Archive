<template>
  <v-timeline dense>
    <v-timeline-item
      small
      color="primary"
    >
      <v-card class="elevation-2">
        <v-card-title class="headline">
          <v-avatar class="mr-3">
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
          답변
          <v-spacer></v-spacer>
          <v-btn depressed>답변하기</v-btn>
        </v-card-title>
        <v-textarea
          class="pt-0 px-3"
          auto-grow
          v-model="text"
        ></v-textarea>
      </v-card>
    </v-timeline-item>
    <v-timeline-item
      v-for="n in 4"
      :key="n"
      small
      color="primary"
    >
      <v-card class="elevation-2">
        <v-card-title class="headline">
          <v-avatar class="mr-3">
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
          Lorem ipsum
        </v-card-title>
        <v-card-text class="pt-0">Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  <!-- <v-container>
    <v-card flat>
      <v-layout row wrap>
        <v-flex xs12>
          <v-list three-line>
            <v-list-tile
              avatar
              class="mb-5"
            >
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
              </v-list-tile-avatar>

              <v-textarea
                class="px-2"
                auto-grow
                v-model="text"
              ></v-textarea>
                
              <v-icon color="primary" @click="addComment">done</v-icon>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card flat>
      <v-layout row wrap>
        <v-flex xs12>
          <v-list three-line>

            <template v-for="comment in comments">

              <v-list-tile
                :key="comment.title"
                avatar
              >
                <v-list-tile-avatar>
                  <img :src="comment.userPicture">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="comment.commentor"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="comment.text"></v-list-tile-sub-title>                  
                  
                </v-list-tile-content>
                <v-icon class="mx-2" 
                  v-if="userInfo.uid === comment.uid"
                  @click="deleteComment(comment.id)"
                >
                  delete
                </v-icon>
                
              </v-list-tile>
            </template>
          </v-list>
          
        </v-flex>
      </v-layout>
    </v-card>
  </v-container> -->
  
</template>

<script>
import { db } from '~/fb'
import * as moment from 'moment';
import { mapGetters } from 'vuex'

export default {
  props: {
    postId: {
      default: "",
      type: String
    },
    comments: {
      default: function () {
        return []
      },
      type: Array
    }
  },
  mounted () {
    
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    addComment () {
      db.collection('forums').doc(this.postId).collection('comments').add({
        uid: this.userInfo.uid,
        // userName: 
        userPicture: this.userInfo.photoURL,
        commentor: "test user name and I think this should be in localstorage",
        text: this.text,
        date: moment().format('LLLL') 
      }).then(() => {
      }).catch(err => {
        console.log(err.message);
      })
    },
    deleteComment (deleteId) {
      db.collection('forums').doc(this.postId).collection('comments').doc(deleteId).delete()
      .then(() => {
      }).catch(err => {
        console.log(err.message);
      })
    }
  }
}
</script>

<style scoped>

</style>
