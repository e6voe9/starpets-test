<template>
  <div
    class="fixed-nav"
    :class="{
      [pos]: this.position,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FixedNav",
  props: ["position"],
  // top-right
  // top-left
  // top-center
  data() {
    return {
      pos: "fixed-nav--" + this.position,
    };
  },
};
</script>

<style lang="scss">
.fixed-nav {
  display: block;
  position: fixed;
  padding: 20px 40px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &--top-center {
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &--top-left {
    top: 20px;
    left: 20px;
  }
  &--top-right {
    top: 20px;
    right: 20px;
  }
}
</style>