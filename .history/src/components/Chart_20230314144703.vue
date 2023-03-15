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
      chartX: [],
      chartY: [],
    };
  },
  props: ["todo", "type"],
  computed: {
    ...mapState("home", ["list3"]),
  },

  mounted() {
    let echarts = inject("ec"); //引入
    this.list3.forEach((item, index) => {
      if (item.title) {
        this.title = item.title;
      } else {
        this.chartX.push(item.name);
        this.chartY.push(item.num);
      }
    });
    let myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: this.chartX,
        axisTick: {
          show: false,
          lineStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {},
      series: [
        {
          type: "line",
          data: this.chartY,

          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 1,
                  color: "rgb(95,219,239)",
                },
                {
                  offset: 0.5,
                  color: "rgba(95,219,239,0.8)",
                },
                {
                  offset: 0,
                  color: "rgba(0,0,0,0)",
                },
              ]),
            },
          },
          symbolSize: 15,
          symbol: "circle", //折线点设置为实心点
          color: "rgb(95,219,239)",
          itemStyle: {
            borderWidth: 1,
            borderColor: "rgb(0,0,0)",
          },
        },
      ],
    });
    window.onresize = function () {
      //自适应大小
      myChart.resize();
    };
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