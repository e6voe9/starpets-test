<template>
  <div
    class="todos__item"
    :class="{
      'todos__item--active': isCompleted,
    }"
  >
    <div class="todos__item-body">
      <b-checkbox
        @click.native="toggleIsCompletedHandler"
        :isChecked="isCompleted"
        :class="['todos__b-checkbox']"
      />
      <span class="todos__title">{{ title }}</span>
    </div>
    <div class="todos__item-btn-box">
      <b-btn @click.native="deleteTodoHandler" :modifier="'delete'">{{
        $t("buttons.delete")
      }}</b-btn>
    </div>
  </div>
</template>

<script>
import BCheckbox from "../../BCheckbox/BCheckbox.vue";
import BBtn from "@/components/BBtn/BBtn";
import { createNamespacedHelpers } from "vuex";
const todosHelper = createNamespacedHelpers("todos");
export default {
  components: { BCheckbox, BBtn },
  name: "SingleTodoItem",
  props: ["isCompleted", "title", "id"],
  methods: {
    ...todosHelper.mapActions(["toggleIsCompleted", "deleteTodo"]),
    toggleIsCompletedHandler() {
      this.toggleIsCompleted(this.id);
    },
    deleteTodoHandler() {
      this.deleteTodo(this.id);
    },
  },
};
</script>

<style lang="scss">
.todos {
  &__item {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    transition: color 250ms ease-in-out;

    &--active {
      color: #42b983;
      text-decoration: line-through;
      .todos {
        &__title {
          opacity: 0.5;
        }
      }
    }
  }

  &__item-body {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  &__title {
    text-align: left;
  }

  &__b-checkbox {
    margin-right: 20px;
  }
}
</style>