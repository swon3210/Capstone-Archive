import Vuex from 'vuex';

// import modules 
import forum from './modules/forum';

// Only for layout-level communication
import state from './states.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';



const store = () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    forum: {
      namespaced: true
    }
  }
})

export default store;