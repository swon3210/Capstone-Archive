const getters = {
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
      state.idTokenResult = JSON.parse(sessionStorage.getItem('vuex').idTokenResult);
    } 
    return state.idTokenResult
  },
  userInfo (state) {
    if (state.userInfo === '') {
      state.userInfo = sessionStorage.getItem('vuex').userInfo;
    }
    return state.userInfo;
  },
  isAdmin (state) {
    if (state.idTokenResult) {
      return state.idTokenResult.claims.admin;
    } else {
      return false
    }
  }
};

export default getters