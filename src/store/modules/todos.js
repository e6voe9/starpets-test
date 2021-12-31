export default {
  namespaced: true,
  state: {
    todosCount: 5,
    todos: [],
    todoInputValue: '',
    isTodosListReversed: false
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    updateTodoInputValue(state, newValue) {
      state.todoInputValue = newValue
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo)
    },
    clearInputTodoValue(state, newValue) {
      state.todoInputValue = newValue
    },
    toggleIsCompleted(state, id) {
      state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
      })
    },
    updateTodosCount(state, newTodosCount) {
      state.todosCount = newTodosCount
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    reverseTodos(state) {
      state.todos = state.todos.reverse()
      state.isTodosListReversed = !state.isTodosListReversed
    }
  },
  actions: {
    async fetchTodos({ commit, state }) {
      const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${state.todosCount}`)
        .then(response => response.json())
      commit('updateTodos', todos.reverse())
    },
    inputTodoHandler({ commit }, e) {
      const value = e.target.value;
      commit('updateTodoInputValue', value)
    },
    addTodoHandler({ commit, getters, dispatch, rootState }) {
      const value = getters.getInputTodoValue.trim()
      if (value === '') {
        dispatch('clearInputTodoValue')
        return
      }

      const newTodo = {
        userId: rootState.user.data.id,
        id: getters.getTheBiggestId + 1,
        title: value,
        completed: false
      }
      commit('addTodo', newTodo)
      dispatch('clearInputTodoValue')
      dispatch('updateTodosCount')
    },
    clearInputTodoValue({ commit }) {
      commit('clearInputTodoValue', '')
    },

    toggleIsCompleted({ commit }, id) {
      commit('toggleIsCompleted', id)
    },
    updateTodosCount({ commit, getters }) {
      commit('updateTodosCount', getters.getTodosCount)
    },
    deleteTodo({ commit, dispatch }, id) {
      commit('deleteTodo', id)
      dispatch('updateTodosCount')
    },
    reverseTodos({ commit }) {
      commit('reverseTodos')
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
    },
    getTheBiggestId(state) {
      const tempTodoList = [...state.todos]
      const todoWithBiggestId = tempTodoList.sort((a, b) => b.id - a.id)[0]
      if (todoWithBiggestId) return todoWithBiggestId.id
      return 1
    }

  }
}