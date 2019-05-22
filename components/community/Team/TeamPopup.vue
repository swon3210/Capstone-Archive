<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn 
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      slot="activator"
      class="success"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>팀 생성하기</h2>
      </v-card-title>
      <v-card-text class="px-3">
        <v-form class="px-3" ref="form">
          <v-text-field label="제목" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          
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
      inputRules: [
        v => v.length >= 1 || 'Minimum length is 1 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  computed: {
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const team = {
          title: this.title,
        }
        db.collection('teams').add(team).then(() => {
          console.log('complete')
          this.loading = false;
          this.dialog = false;
        }).catch(err => {
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
