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
    <b-btn v-if="todosCount > 1" @click.native="reverseTodos"
      >Reverse List</b-btn
    >
    <transition-group class="todos__list" name="list-complete" tag="div">
      <single-todo-item
        v-for="todo in getTodos"
        :isCompleted="todo.completed"
        :title="todo.title"
        :key="todo.id"
        :id="todo.id"
        :class="['list-complete-item']"
      />
    </transition-group>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const todosHelper = createNamespacedHelpers("todos");

import BBtn from "@/components/BBtn/BBtn";
import BInput from "../BInput/BInput.vue";
import SingleTodoItem from "./SingleTodoItem/SingleTodoItem";

export default {
  name: "TodoList",
  components: {
    BBtn,
    BInput,
    SingleTodoItem,
  },
  computed: {
    ...todosHelper.mapGetters(["getTodos", "getInputTodoValue"]),
    ...todosHelper.mapState({ todosCount: "todosCount" }),
  },
  methods: {
    ...todosHelper.mapActions([
      "fetchTodos",
      "inputTodoHandler",
      "addTodoHandler",
      "reverseTodos",
    ]),
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

  &__form {
    margin-bottom: 20px;
  }

  &__list {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  &__label {
    margin-bottom: 15px;
    display: block;
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
