<template>
  <div>
    <v-card flat>
      <v-icon @click="$emit('to_forum_list')" class="pt-5 px-5">arrow_back_ios</v-icon>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs12>
            <div v-show="formMode !== 'add'" class="mb-5 mx-5">
              <h3 class="display-1 pa-2">
                {{postData.title}}
              </h3>
              <v-divider class="mb-5"></v-divider>
              <span class="subheading">{{postData.text}}</span>
            </div>
            
            <ForumForm 
              v-if="computedformMode === 'add'"
              @to_forum_list="$emit('to_forum_list')"
            />
            <ForumComments
              v-if="computedformMode !== 'add'"
              :comments = "comments"
              :postId = "postData.id"
            />

          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ForumForm from './ForumForm'
import { db } from '~/fb'
import ForumComments from '~/components/community/forum/ForumComments';

export default {
  props: {
    mode: {
      default: 'view',
      type: String
    },
    postData: {
      default: {},
      type: Object
    }
  },
  data () {
    return {
      formMode: '',
      comments: []
    }
  },
  components: {
    ForumForm,
    ForumComments
  },
  computed: {
    computedformMode () {
      this.formMode = this.mode
      return this.formMode;
    }
  },
  beforeMount () {
    const comments = [];
    db.collection('forums').doc(this.postData.id).collection('comments').onSnapshot(res => {
      
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          comments.push({...change.doc.data(), id: change.doc.id});
        } else if (change.type === 'removed') {
          const index = comments.findIndex(x => x.id === change.doc.id);
          comments.splice(index, 1);
        }
      })
      this.comments = comments;
    }, err => {
      console.log(err.message);
    });
  },
  methods: {
  
  }
}
</script>

<style scoped>

</style>
