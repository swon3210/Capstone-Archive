const mutations = {
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
  init_user_info (state, payload) {
    state.userInfo = payload;
  },
  init_idTokenResult (state, payload) {
    state.idTokenResult = payload;
  }
}

export default mutations