export default {
  namespaced: true,
  state: {
    todosCount: 3,
    todos: []
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    incrementTodosCount(state) {
      state.todosCount += 3
    }
  },
  actions: {
    async fetchTodos({ commit, state }) {
      const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${state.todosCount}`)
        .then(response => response.json())
      commit('updateTodos', todos)
    },

    incrementTodosCount({ commit, dispatch }) {
      commit('incrementTodosCount')
      dispatch('fetchTodos')
    }

  },
  getters: {
    getTodos(state) {
      return state.todos
    }
  }
}