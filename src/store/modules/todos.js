export default {
  namespaced: true,
  state: {
    todosCount: 3,
    todos: [],
    todoInputValue: ''
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    incrementTodosCount(state) {
      state.todosCount += 3
    },
    updateTodoInputValue(state, newValue) {
      state.todoInputValue = newValue
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo)
    },
    clearInputTodoValue(state, newValue) {
      state.todoInputValue = newValue
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
    },
    inputTodoHandler({ commit }, e) {
      const value = e.target.value;
      commit('updateTodoInputValue', value)
    },
    addTodoHandler({ commit, getters, dispatch }) {
      const value = getters.getInputTodoValue.trim()
      if (value === '') {
        dispatch('clearInputTodoValue')
        return
      }

      const newTodo = {
        userId: 1,
        id: getters.getTodosCount + 1,
        title: value,
        completed: false
      }
      commit('addTodo', newTodo)
      dispatch('clearInputTodoValue')
    },
    clearInputTodoValue({ commit }) {
      commit('clearInputTodoValue', '')
    }

  },
  getters: {
    getTodos(state) {
      return state.todos
    },
    getInputTodoValue(state) {
      return state.todoInputValue
    },
    getTodosCount(state) {
      return state.todos.length
    }
  }
}