<template>
  <div class="user-info-table">
    <user-info-table-row :heading="'Name'" :text="getUserData.name" />
    <user-info-table-row :heading="'Username'" :text="getUserData.username" />
    <user-info-table-row :heading="'Email'" :text="getUserData.email" />
    <user-info-table-row
      :heading="'Street'"
      :text="getUserData.address.street"
    />
    <user-info-table-row :heading="'Suite'" :text="getUserData.address.suite" />
    <user-info-table-row :heading="'City'" :text="getUserData.address.city" />
    <user-info-table-row
      :heading="'Zipcode'"
      :text="getUserData.address.zipcode"
    />
    <user-info-table-row :heading="'Phone'" :text="getUserData.phone" />
    <user-info-table-row :heading="'Website'" :text="getUserData.website" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UserInfoTableRow from "./UserInfoTableRow/UserInfoTableRow.vue";
const userHelper = createNamespacedHelpers("user");

export default {
  components: { UserInfoTableRow },
  name: "UserInfoTable",
  computed: {
    ...userHelper.mapGetters(["getUserData"]),
  },
};
</script>

<style lang="scss">
.user-info-table {
  padding: 20px;
  width: 100%;
  text-align: left;
  &__row {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }

  &__heading {
    width: 30%;
    border-right: 2px solid #eee;
  }

  &__text {
    width: 70%;
    padding-left: 20px;
  }
}
</style>