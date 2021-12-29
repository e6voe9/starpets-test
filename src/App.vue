<template>
  <div id="app">
    <FixedNav />
    <main class="main">
      <router-view/>
    </main>


    <!-- <div class="todos">
      <div class="todos__item" v-for="todo in getTodos" :key="todo.id">
        <b>{{ todo.id }}</b><br>
        <p>{{todo.title}}</p>
        <p>Completed: 
          <span v-if="todo.completed">+</span>
          <span v-else>-</span>  
        </p>
      </div>
    </div>
    <button @click="incrementTodosCount">Load 3 more from API</button> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FixedNav from './components/FixedNav/FixedNav';

const { mapGetters, mapActions, mapState } = createNamespacedHelpers('todos');

export default {
  name: 'app',
  components: {
    FixedNav
  },
  computed: {
    ...mapGetters(['getTodos']),
    ...mapState({
      todosCount: 'todosCount'
    })
  },
  methods: mapActions(['fetchTodos', 'incrementTodosCount']),

  async mounted() {
    this.fetchTodos(this.todosCount);
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "RussoOne";
  src: url("./assets/fonts/RussoOne-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  color: inherit;
  text-decoration: none;
}
button{
  cursor: pointer;
  background: none;
  border: none;
}
button, input{
  font-family: inherit;
}
ul,li,ol{
  list-style-type: none;
}
#app {
  font-family: 'RussoOne', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 40px;
}

.main{
  padding-top: 100px;
}

.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;

  &__item{
    display: inline-block;
    background: #ccc;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;

    b, p{
      margin-bottom: 15px;
    }
    p{
      &:last-child{
        margin-bottom: 0;
        color: darkmagenta;
      }
    }
  }
}

</style>
