<template>
  <div class="header">
    <Tag></Tag>
    <Tag></Tag>
    <Tag></Tag>
    <Tag></Tag>
  </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
  name: "Header",
  components: { Tag },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  & :nth-last-child(1) {
    margin: 0;
  }
}
</style>