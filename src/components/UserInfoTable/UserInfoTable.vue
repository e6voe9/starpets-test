<template>
  <div class="user-info-table">
    <user-info-table-row
      :heading="$t('userDataTitles.name')"
      :text="getUserData.name"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.username')"
      :text="getUserData.username"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.email')"
      :text="getUserData.email"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.street')"
      :text="getUserData.address.street"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.suite')"
      :text="getUserData.address.suite"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.city')"
      :text="getUserData.address.city"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.zipcode')"
      :text="getUserData.address.zipcode"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.phone')"
      :text="getUserData.phone"
    />
    <user-info-table-row
      :heading="$t('userDataTitles.website')"
      :text="getUserData.website"
    />
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
  width: 100%;
  text-align: left;
  padding: 40px 30px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    width: 40%;
    border-right: 2px solid #eee;
  }

  &__text {
    width: 60%;
    padding-left: 20px;
  }
}
</style>