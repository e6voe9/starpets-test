export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    updateUserData(state, newData) {
      state.data = newData
    }
  },
  actions: {
    async fetchUserData({ commit }) {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(response => response.json())
      commit('updateUserData', data)
    },
  },
  getters: {
    getUserData(state) {
      return state.data
    }
  }
}