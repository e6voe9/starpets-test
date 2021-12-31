<template>
  <div class="not-found">
    <b-heading>
      {{ $t("pageHeadings.notFound") }}
    </b-heading>
  </div>
</template>

<script>
import BHeading from "../components/BHeading/BHeading.vue";
export default {
  components: { BHeading },
  name: "NotFound",
};
</script>
