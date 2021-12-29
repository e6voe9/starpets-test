<template>
  <div class="fixed-nav">
    <NavList :class="'fixed-nav__nav-list'" :links="getNavLinks"/>
  </div>
</template>

<script>
import NavList from './../NavList/NavList';
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('navlinks');

export default {
  name: 'FixedNav',
  components: {
    NavList
  },
  computed: mapGetters(['getNavLinks'])
}
</script>

<style lang="scss">
.fixed-nav {
  display: block;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 20px 40px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  &__nav-list {
  }
}

</style>