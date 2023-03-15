<template>
  <div class="chart">
    <div class="title">{{ title }}</div>
    <div id="main" style="width: 100%; height: calc(100% - 45px)"></div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

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
  setup() {
    let echarts = inject("ec"); //引入
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("customerChart"));
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        myChart.resize();
      };
    });
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