<template>
  <div class="user-info-table__row">
    <h2 class="user-info-table__heading">{{ heading }}</h2>
    <p class="user-info-table__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "UserInfoTableRow",
  props: ["heading", "text"],
};
</script>

<style lang="scss">
.user-info-table {
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