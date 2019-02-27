<template>
  <v-card flat>
    
    <v-container>
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
                label="답변"
                v-model="text"
              ></v-textarea>
                
              <v-icon color="primary" @click="addComment">done</v-icon>
            </v-list-tile>
            <template v-for="comment in comments">

              <v-list-tile
                :key="comment.title"
                avatar
              >
                <v-list-tile-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="comment.commentor"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="comment.text"></v-list-tile-sub-title>                  
                  
                </v-list-tile-content>
                <v-icon class="mx-2" 
                  v-if="$store.getters.uid === comment.uid"
                  @click="deleteComment(comment.id)"
                >
                  delete
                </v-icon>
                
              </v-list-tile>
            </template>
          </v-list>
          
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { db } from '~/fb'
import * as moment from 'moment';

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
  methods: {
    addComment () {
      db.collection('forums').doc(this.postId).collection('comments').add({
        uid: this.$store.getters.uid,
        commentor: "test user name and I think this should be in localstorage",
        text: this.text,
        date: moment().format('LLLL') 
      }).then(() => {
        alert('completed!')
      }).catch(err => {
        console.log(err.message);
      })
    },
    deleteComment (deleteId) {
      alert('work!')
      db.collection('forums').doc(this.postId).collection('comments').doc(deleteId).delete()
      .then(() => {
        alert('deleted!')
      }).catch(err => {
        console.log(err.message);
      })
    }
  }
}
</script>

<style scoped>

</style>
