<template>
  <div>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              label="제목"
              v-model="title"
            ></v-text-field>
          </v-flex>
    
          <v-flex xs12>
            <v-textarea
              color="teal"
              v-model="text"
            >
              <div slot="label">
                질문사항<small>(선택)</small>
              </div>
            </v-textarea>
          </v-flex>
          <v-flex xs12>
            <v-select
              label="선택"
              v-model="categories"
            ></v-select>
          </v-flex>

        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat @click="$emit('go_back')">취소</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          flat
          :loading="loading"
          @click="submit"
        >등록</v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
import { db } from '~/fb'
import * as moment from 'moment';
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: '',
      text: '',
      categories: [],
      loading: false
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    submit () {
      const now = moment().format('LLLL');
      const forumPost = {
        uid: this.userInfo.uid,
        authorName: '',
        authorTeam: '',
        authorRole: '',
        title: this.title,
        text: this.text,
        categories: this.categories,
        publishedDate: now
      }

      db.collection('forums').add(forumPost).then(() => {
        this.loading = false;
        this.$router.push('/communitypage/forum')
      }).catch(err => console.log(err.message))
    }
  }
}
</script>

<style scoped>

</style>
