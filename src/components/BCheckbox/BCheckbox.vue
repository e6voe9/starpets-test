<template>
  <div class="b-checkbox">
    <input type="checkbox" class="b-checkbox__checkbox" v-model="isChecked" />
    <span class="b-checkbox__checkbox-square"></span>
  </div>
</template>

<script>
export default {
  name: "BCheckbox",
  props: ["isChecked"],
};
</script>

<style lang="scss">
.b-checkbox {
  position: relative;
  cursor: pointer;
  &__checkbox {
    position: absolute;
    pointer-events: none;
    opacity: 0;

    &:checked {
      ~ .b-checkbox {
        &__checkbox-square {
          &::after {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
    }
  }

  &__checkbox-square {
    display: block;
    width: 26px;
    height: 26px;
    border: 2px solid #42b983;
    border-radius: 3px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 3px;
      background: #42b983;
      transition: transform 250ms ease-in-out;
    }
  }
}
</style>