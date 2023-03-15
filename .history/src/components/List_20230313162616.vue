<template>
  <div class="list">
    <div class="title">数据交换情况</div>
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
    width: 100%;
    height: 42px;
    line-height: 42px;

    color: #ffffff;
    font-size: 20px;
  }
}
</style>