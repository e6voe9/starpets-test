<template>
  <div id="app">
    <FixedNav>
      <NavList :class="'fixed-nav__nav-list'" :links="getNavLinks" />
    </FixedNav>
    <main class="main">
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import FixedNav from "./components/FixedNav/FixedNav";
import NavList from "./components/NavList/NavList";

const navlinksHelper = createNamespacedHelpers("navlinks");
const todosHelper = createNamespacedHelpers("todos");

export default {
  name: "app",
  components: {
    FixedNav,
    NavList,
  },
  computed: {
    ...navlinksHelper.mapGetters(["getNavLinks"]),
    ...todosHelper.mapState({ todosCount: "todosCount" }),
  },
  methods: {
    ...todosHelper.mapActions(["fetchTodos"]),
  },

  async mounted() {
    this.fetchTodos(this.todosCount);
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "RussoOne";
  src: url("./assets/fonts/RussoOne-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  cursor: pointer;
  background: none;
  border: none;
}
button,
input {
  font-family: inherit;
}
ul,
li,
ol {
  list-style-type: none;
}
#app {
  font-family: "RussoOne", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 40px;
}

.main {
  padding-top: 100px;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 300ms ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
