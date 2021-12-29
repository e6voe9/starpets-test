import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import navlinks from './modules/navlinks'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todos,
    navlinks
  }
})

export default store;