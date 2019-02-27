<template>
  <div class="row register-form" style="background-color: #ffffff;background-image: url(/login.jpg);background-size: cover;">
    <div class="col-md-8 offset-md-2">
      <form id="register-form" class="custom-form" @submit.prevent="register">
        <h1>회원가입</h1>
        <div class="form-row form-group">
          <div class="col-sm-4 label-column"><label class="col-form-label" for="name-input-field">Name </label></div>
          <div class="col-sm-6 input-column"><input id="register-name" class="form-control" type="text" v-model="userName"></div>
        </div>
        <div class="form-row form-group">
          <div class="col-sm-4 label-column"><label class="col-form-label" for="email-input-field">Email </label></div>
          <div class="col-sm-6 input-column"><input id="register-email" class="form-control" type="email" v-model="userEmail"></div>
        </div>
        <div class="form-row form-group">
          <div class="col-sm-4 label-column"><label class="col-form-label" for="pawssword-input-field">Password </label></div>
          <div class="col-sm-6 input-column"><input id="register-password" class="form-control" type="password" v-model="userPassword"></div>
        </div>
        <div class="form-row form-group">
          <div class="col-sm-4 label-column"><label class="col-form-label" for="repeat-pawssword-input-field">Repeat Password </label></div>
          <div class="col-sm-6 input-column"><input id="register-repeat-password" class="form-control" type="password" v-model="userRepeatPassword"></div>
        </div>
        <div class="form-check"><label class="form-check-label" for="formCheck-1">{{error}}</label></div><button class="btn btn-light submit-button" type="submit">가입하기</button>
        <button class="btn btn-light submit-button" @click.prevent="google_sign_up">구글 아이디로 가입하기</button></form>        
        <p class="danger"></p>
    </div>
  </div>
</template>

<script>
import { db, auth, firebase } from '~/fb';

export default {
  layout: 'empty',
  data () {
    return {
      userName: '',
      userEmail: '',
      userPassword: '',
      userRepeatPassword: '',
      error: ''
    }
  },
  methods: {
    register () {
      auth.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
      .then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
          name: this.userName,
          email: this.userEmail
        })
      }).then(() => {
        this.userName = '';
        this.userEmail = '';
        this.userPassword = '';
        this.userRepeatPassword = '';
        this.$router.push('/communitypage/login');
      }).catch(err => {
        this.error = err.message;
        console.log(err.message);
      });
    },
    google_sign_up () {
      const provider = new firebase.auth.GoogleAuthProvider();

      auth.signInWithPopup(provider).then(cred => {

        this.$store.commit('init_uid', cred.user.uid);

        return db.collection('users').doc(cred.user.uid).set({
          name: cred.additionalUserInfo.profile.name,
          email: cred.additionalUserInfo.profile.email,
          picture: cred.additionalUserInfo.profile.picture
        })
        
      }).then(() => {
        this.userName = '';
        this.userEmail = '';
        this.userPassword = '';
        this.userRepeatPassword = '';
        this.$router.push('/communitypage/login');
      }).catch(err => {
        this.error = err.message;
        console.log(err.message);
      });
    }
  }
}
</script>

<style scoped>
@import url('~/assets/css/bootstrap.min.css');
@import url('~/assets/css/Pretty-Registration-Form.css');
</style>
