<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn 
      flat 
      slot="activator"
      class="success"
    >
      Add new project
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text class="px-3">
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea :rules="inputRules" label="Information" v-model="content" prepend-icon="edit"></v-textarea>

          <v-menu>
            <v-text-field :value="formattedDate" slot="activator" label="Due Date" prepend-icon="date_range"></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-spacer />
          
          <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
        </v-form>
      </v-card-text>      
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import { db } from '~/fb'

export default {
  data () {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  computed: {
    formattedDate () {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, 'Do MMM YYYY'),
          author: 'Song Won Lee',
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(() => {
          this.loading = false;
          this.dialog = false;
          this.$store.commit('create_snackbar');
        }).catch(err => {
          alert('권한이 없습니다!');
          this.loading = false;
          this.dialog = false;
          console.log(err.message);
        });
      }
    },
  }
}
</script>

<style scoped>

</style>
