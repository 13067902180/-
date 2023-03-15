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
};
</script>

<style lang="less" scoped>
.main div {
  height: 400px;
  width: 1005;
}
</style>