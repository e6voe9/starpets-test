<template>
  <div class="fixed-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FixedNav',
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

}
</style>