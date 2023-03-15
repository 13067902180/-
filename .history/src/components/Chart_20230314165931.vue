<template>
  <div class="chart">
    <div class="title">{{ title }}</div>
    <el-radio-group v-model="radio" @change="ChangeChart(radio)">
      <el-radio :label="3">年</el-radio>
      <el-radio :label="4">月</el-radio>
      <el-radio :label="5">周</el-radio>
    </el-radio-group>
    <div
      id="main"
      style="width: 100%; height: calc(100% - 45px); z-index: -1"
    ></div>
  </div>
</template>

<script>
import "@/assets/css/restCss.css";
import { inject, onMounted } from "vue";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "Chart",
  data() {
    return {
      listfirst: false,
      listsecond: false,
      title: "",
      chartX: [],
      chartY: [],
      radio: 3,
      list: this.$store.state.home.list3,
    };
  },
  setup:{
     echarts = inject("ec"); //引入
  },
  props: ["todo", "type"],
  methods: {
    ChangeChart(value) {
      switch (value) {
        case 3:
          this.list = this.$store.state.home.list3;
          this.firstleft();
          break;
        case 4:
          this.list = this.$store.state.home.list4;
          this.firstleft();
          break;
        case 5:
          this.list = this.$store.state.home.list5;
          this.firstleft();
          break;
      }
    },
    firstleft() {
      
      this.list.forEach((item, index) => {
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
        grid: {
          top: "10%",
          left: "8%",
          right: "8%",
        },
        xAxis: {
          data: this.chartX,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(95,219,239,0.8)",
            },
          },
        },
        yAxis: {
          name: "万条",
          nameGap: 20,
          nameTextStyle: {
            align: "right",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: "line",
            data: this.chartY,

            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 1,
                    color: "rgb(95,219,239)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(95,219,239,0.8)",
                  },
                  {
                    offset: 0.3,
                    color: "rgba(95,219,239,0.4)",
                  },
                  {
                    offset: 0.2,
                    color: "rgba(95,219,239,0.3)",
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
  },
  mounted() {
    this.firstleft();
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
  .el-radio-group {
    float: right;
    .el-radio {
      margin-right: 26px;
    }
  }
}
</style>