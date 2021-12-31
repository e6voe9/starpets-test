<template>
  <div class="user">
    <div class="user__header">
      <b-heading :class="['user__b-heading']">{{
        $t("pageHeadings.user")
      }}</b-heading>
    </div>
    <div class="user__body">
      <user-info-table />
    </div>
  </div>
</template>

<script>
import BHeading from "../components/BHeading/BHeading.vue";
import UserInfoTable from "../components/UserInfoTable/UserInfoTable.vue";
export default {
  components: { BHeading, UserInfoTable },
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