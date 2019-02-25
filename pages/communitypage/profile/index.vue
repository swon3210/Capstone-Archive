<template>
  <div>
    <ProfileHeader 
      :name = userName
    />
    <p>{{userEmail}}</p>
    <v-btn flat block @click="request_admin_claim">Administrator 권한 요청</v-btn> 
  </div>
</template>

<script>
import { db, functions } from '~/fb';
import ProfileHeader from '~/components/community/ProfileHeader';
import { mapGetters } from 'vuex';

export default {
  layout: 'community',
  data () {
    return {
      userName: '',
      userEmail: ''
    }
  },
  computed: {
    ...mapGetters(['uid'])
  },
  components: {
    ProfileHeader
  },
  beforeMount() {
    if (this.uid) {
      db.collection('users').doc(this.uid).get()
      .then(doc => {
        this.userName = doc.data().name;
        this.userEmail = doc.data().email;
      });
    } 
  },
  methods: {
    request_admin_claim () {
      const add_admin_role = functions.httpsCallable('addAdminRole');
      add_admin_role({ email: this.userEmail}).then(result => {
        console.log(result);
      });
    }
  }
}
</script>

<style scoped>

</style>
