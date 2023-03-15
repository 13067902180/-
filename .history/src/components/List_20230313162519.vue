<template>
  <div class="list">
    <span class="title">数据交换情况</span>
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style lang="less" scoped>
.list {
  height: 400px;
  width: 400px;
  background: url("@/assets/img/jcmysql/list.png") no-repeat;
  .title {
    margin-top: 14px;
    color: #ffffff;
    font-size: 20px;
  }
}
</style>