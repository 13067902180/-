<template>
  <div class="main">
    <Upper></Upper>
    <Lower></Lower>
  </div>
</template>

<script>
import Lower from "./Lower.vue";
import Upper from "./Upper.vue";
export default {
  name: "Main",
  components: { Upper, Lower },
  data,
};
</script>

<style lang="less" scoped>
.main div {
  height: 400px;
  width: 100%;
}
</style>