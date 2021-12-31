<template>
  <button
    class="b-btn"
    :class="{
      'b-btn--delete': modifier === 'delete',
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BBtn",
  props: ["modifier"],
};
</script>

<style lang="scss">
.b-btn {
  --bg: #fff;
  --bg-hover: #d9f7e9;
  --bg-active: #b8cac2;
  --clr: #2c3e50;

  border-radius: 10px;
  padding: 8px 16px;
  background: var(--bg);
  color: var(--clr);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--bg-hover);
  }
  &:active {
    transition: background 0 ease-in-out;
    background: var(--bg-active);
  }

  &--delete {
    --bg: rgb(196, 62, 62);
    --bg-hover: rgb(194, 94, 94);
    --bg-active: rgb(136, 38, 38);
    --clr: #fff;
  }
}
</style>