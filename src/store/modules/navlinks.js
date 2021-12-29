export default {
  namespaced: true,
  state: {
    links: [
      {
        id: 1,
        title: 'Home',
        to: '/'
      },
      {
        id: 2,
        title: 'User',
        to: '/user'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getNavLinks(state) {
      return state.links
    }
  }
}