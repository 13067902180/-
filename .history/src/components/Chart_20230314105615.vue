<template>
  <div class="chart">
    <div class="title" @click="x()">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Chart",
};
</script>

<style lang="less" scoped>
.chart {
  width: 950px;
  height: 400px;
  background: url("@/assets/img/jcmysql/chart.png") no-repeat;
  background-size: 100% 100%;
}
</style>