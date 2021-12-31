<template>
  <div class="home">
    <b-heading :class="['home__b-heading']">{{
      $t("pageHeadings.home")
    }}</b-heading>
    <todo-list />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList/TodoList";
import BHeading from "../components/BHeading/BHeading.vue";
export default {
  name: "Home",
  components: {
    TodoList,
    BHeading,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__b-heading {
    margin-bottom: 50px;
  }
}
</style>
