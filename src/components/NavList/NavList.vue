<template>
  <ul class="nav-list">
    <li class="nav-list__item">
      <router-link class="nav-list__link" to="/" exact>{{
        $t("pageNames.home")
      }}</router-link>
    </li>
    <li class="nav-list__item">
      <router-link class="nav-list__link" to="/user" exact>{{
        $t("pageNames.user")
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavList",
};
</script>

<style lang="scss">
.nav-list {
  &__item {
    display: inline-block;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    transition: color 150ms ease-in-out, background 150ms ease-in-out;
    border-radius: 10px;
    padding: 10px 20px;

    &:hover {
      background: #42b98335;
    }

    &:active {
      transition: background 0 ease-in-out;
      background: #1a4b3635;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>