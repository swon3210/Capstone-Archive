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
        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1"><label class="form-check-label" for="formCheck-1">모든 약관에 동의합니다</label></div><button class="btn btn-light submit-button" type="submit">가입하기</button></form>
    </div>
  </div>
</template>

<script>
import { db, auth } from '~/fb';

export default {
  layout: 'empty',
  data () {
    return {
      userName: '',
      userEmail: '',
      userPassword: '',
      userRepeatPassword: ''
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
      });
    }
  }
}
</script>

<style scoped>

</style>
