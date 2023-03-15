<template>
  <div class="chart">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  data() {
    return {
      listfirst: false,
      listsecond: false,
      title: "",
    };
  },
  props: ["todo", "type"],
  computed: {
    chart() {
      console.log(...mapState("home", ["list3"]));
    },
  },
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