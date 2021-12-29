<template>
  <input type="text" class="b-input" :value="value" />
</template>

<script>
export default {
  name: "BInput",
  props: ["value"],
};
</script>

<style lang="scss">
.b-input {
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #42b983;
  outline: none;
  transition: box-shadow 150ms ease-in-out;
  font-size: 20px;

  &:hover {
    box-shadow: inset 0 0 0 1px #42b983;
  }

  &:focus {
    box-shadow: inset 0 0 0 2px #42b983;
  }
}
</style>