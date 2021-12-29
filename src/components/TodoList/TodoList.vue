<template>
  <div class="todos">
    <form @submit.prevent="addTodoHandler" class="todos__form">
      <label class="todos__label">
        <b-input
          @input.native="inputTodoHandler"
          :class="'todos__b-input'"
          :placeholder="'Write your task'"
          :value="getInputTodoValue"
        />
      </label>
      <b-btn type="submit">Add</b-btn>
    </form>
    <div class="todos__list">
      <transition-group name="list-complete" tag="div">
        <div
          class="todos__item list-complete-item"
          :class="{
            'todos__item--active': todo.completed,
          }"
          v-for="todo in getTodos"
          :key="todo.id"
        >
          {{ todo.title }}
        </div>
      </transition-group>
    </div>
    <b-btn @click.native="incrementTodosCount">Load More from API</b-btn>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const todosHelper = createNamespacedHelpers("todos");

import BBtn from "@/components/BBtn/BBtn";
import BInput from "../BInput/BInput.vue";

export default {
  name: "TodoList",
  components: {
    BBtn,
    BInput,
  },
  computed: {
    ...todosHelper.mapGetters(["getTodos", "getInputTodoValue"]),
    ...todosHelper.mapState({ todosCount: "todosCount" }),
  },
  methods: {
    ...todosHelper.mapActions([
      "fetchTodos",
      "incrementTodosCount",
      "inputTodoHandler",
      "addTodoHandler",
    ]),
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
  padding: 40px 30px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &__list {
    margin-bottom: 30px;
  }

  &__label {
    margin-bottom: 15px;
    display: block;
  }

  &__item {
    display: inline-block;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 20px;

    &--active {
      color: #42b983;
      text-decoration: line-through;
      opacity: 0.5;
    }

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.list-complete-item {
  transition: all 500ms;
}
</style>
