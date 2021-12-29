<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList/TodoList";
export default {
  name: "Home",
  components: {
    TodoList,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
