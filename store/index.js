import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    snackbar: false,
    loginDisplay: 'Login',
    idTokenResult: '',
    uid: '',
    isAdmin: false
  },
  getters: {
    snackbar (state) {
      return state.snackbar;
    },
    loginDisplay (state) {
      return state.loginDisplay;
    },
    idTokenResult (state) {
      if (state.idTokenResult === undefined) {
        state.idTokenResult = '';
      }
      if (state.idTokenResult === '') {
        state.idTokenResult = JSON.parse(localStorage.getItem('idTokenResult'));
      } 
      return state.idTokenResult
    },
    uid (state) {
      if (state.uid === undefined) {
        state.uid = '';
      }
      if (state.uid === '') {
        state.uid = localStorage.getItem('uid');
      }
      return state.uid;
    },
    isAdmin (state) {
      if (state.idTokenResult) {
        return state.idTokenResult.claims.admin;
      } else {
        return false
      }
    }
  },
  mutations: {
    create_snackbar (state) {
      state.snackbar = true;
    },
    remove_snackbar (state) {
      state.snackbar = false;
    },
    display_login (state) {
      state.loginDisplay = 'Login'
    },
    display_logout (state) {
      state.loginDisplay = 'Logout'
    },
    init_uid (state, payload) {
      state.uid = payload;
    },
    init_idTokenResult (state, payload) {
      state.idTokenResult = payload;
    }
  },
  actions: {

  }
})

export default store;