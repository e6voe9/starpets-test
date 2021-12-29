<template>
  <div class="todos">
    <div class="todos__list">
      <div
        class="todos__item"
        :class="{
          'todos__item--active': todo.completed,
        }"
        v-for="todo in getTodos"
        :key="todo.id"
      >
        <b>{{ todo.id }}</b
        ><br />
        <p>{{ todo.title }}</p>
      </div>
    </div>
    <LoadMoreBtn @click.native="incrementTodosCount">Load More</LoadMoreBtn>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const todosHelper = createNamespacedHelpers("todos");

import LoadMoreBtn from "@/components/LoadMoreBtn/LoadMoreBtn";

export default {
  name: "TodoList",
  components: {
    LoadMoreBtn,
  },
  computed: {
    ...todosHelper.mapGetters(["getTodos"]),
    ...todosHelper.mapState({ todosCount: "todosCount" }),
  },
  methods: {
    ...todosHelper.mapActions(["fetchTodos", "incrementTodosCount"]),
  },

  async mounted() {
    this.fetchTodos(this.todosCount);
  },
};
</script>

<style lang="scss">
.todos {
  width: 100%;
  max-width: 700px;
  padding: 40px 0;
  &__list {
    margin-bottom: 30px;
  }

  &__item {
    display: inline-block;
    background: #ccc;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 20px;

    &--active {
      border: 5px solid #42b983;
    }

    b,
    p {
      margin-bottom: 15px;
    }
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
