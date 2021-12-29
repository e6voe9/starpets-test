<template>
  <button class="load-more-btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "LoadMoreBtn",
};
</script>

<style lang="scss">
.load-more-btn {
  border-radius: 10px;
  padding: 8px 16px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background 150ms ease-in-out;

  &:hover {
    background: #d9f7e9;
  }
  &:active {
    transition: background 0 ease-in-out;
    background: #b8cac2;
  }
}
</style>