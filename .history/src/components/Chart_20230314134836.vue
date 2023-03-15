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
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      //配置图表
      var option = {
        title: {
          text: "echarts入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      myChart.setOption(option);
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