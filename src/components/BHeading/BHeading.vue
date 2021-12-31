<template>
  <h1 class="b-heading"><slot></slot></h1>
</template>
<script>
export default {
  name: "BHeading",
};
</script>

<style lang="scss">
.b-heading {
  font-size: 36px;
  line-height: 1.2;
}
</style>