import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    snackbar: false,
    loginDisplay: 'Login',
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
    isAdmin (state) {
      return state.isAdmin;
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
    is_admin (state, payload) {
      state.isAdmin = payload;
    }

  },
  actions: {

  }
})

export default store;