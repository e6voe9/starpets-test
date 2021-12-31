<template>
  <div class="user">
    <div class="user__header">
      <b-heading :class="['user__b-heading']">User page</b-heading>
    </div>
    <div class="user__body"></div>
  </div>
</template>

<script>
import BHeading from "../components/BHeading/BHeading.vue";
export default {
  components: { BHeading },
  name: "User",
};
</script>

<style lang="scss">
.user {
  &__b-heading {
    margin-bottom: 50px;
  }
}
</style>