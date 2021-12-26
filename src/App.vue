<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <div class="todos">
      <div class="todos__item" v-for="todo in getTodos" :key="todo.id">
        {{ todo.txt }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  computed: mapGetters(['getTodos'])
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 24px;
}
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 100px;

  &__item{
    display: inline-block;
    background: #ccc;
  }
}

</style>
