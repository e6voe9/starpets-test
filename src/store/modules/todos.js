export default {
  state: {
    todos: [
      {
        id: 1,
        txt: 'todo number 1'
      },
      {
        id: 2,
        txt: 'todo number 2'
      },
      {
        id: 3,
        txt: 'todo number 3'
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getTodos(state) {
      return state.todos
    }
  }
}