<template>
  <div class="chart">
    <div class="title">{{ title }}</div>
    <div id="main" style="width: 100%; height: calc(100% - 45px)"></div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import * as echarts from "echarts";
export default {
  name: "Chart",
  data() {
    return {
      listfirst: false,
      listsecond: false,
      title: "",
      chart: "",
    };
  },
  props: ["todo", "type"],
  computed: {
    ...mapState("home", ["list3"]),
  },
  mounted() {
    this.list3.forEach((item, index) => {
      if (item.title) {
        this.title = item.title;
      }
    });
    this.myEcharts();
  },
};
</script>

<style lang="less" scoped>
.chart {
  width: 950px;
  height: 400px;
  background: url("@/assets/img/jcmysql/chart.png") no-repeat;
  background-size: 100% 100%;
  .title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #ffffff;
    font-size: 20px;
    font-family: YouSheBiaoTiHei;
    font-weight: 400;
  }
}
</style>