<template>
  <div class="bar">
    <div class="title">{{ title }}</div>
    <el-radio-group v-model="radio" @change="ChangeChart(radio)">
      <el-radio :label="3">年</el-radio>
      <el-radio :label="6">月</el-radio>
      <el-radio :label="5">周</el-radio>
    </el-radio-group>
    <div
      id="bar"
      style="
        width: 100%;
        height: calc(100% - 45px);
        z-index: -1;
        position: relative;
      "
    ></div>
  </div>
</template>
  
<script>
import "@/assets/css/restCss.css";
export default {
  name: "Bar",
  data() {
    return {
      title: "",
      list: this.$store.state.home.list6,
      BarX: [],
      BarY: [],
      radio: 3,
      seriesData: [],
      labels: [],
    };
  },
  props: ["todo"],
  mounted() {
    this.firstleft();
  },
  methods: {
    ChangeChart(value) {
      switch (value) {
        case 3:
          this.list = this.$store.state.home.list3;
          this.firstleft();
          break;
        case 6:
          this.list = this.$store.state.home.list6;
          this.firstleft();
          break;
        case 5:
          this.list = this.$store.state.home.list5;
          this.firstleft();
          break;
      }
    },

    firstleft() {
      var echarts = require("echarts");
      (this.BarX = []),
        (this.BarY = []),
        this.list.forEach((item, index) => {
          if (item.title) {
            this.title = item.title;
          } else {
            this.labels.push(item.name);
            this.seriesData.push({ label: item.name }, { value: [item.num] });
            this.BarX.push(item.name);
            this.BarY.push(item.num);
          }
        });
      let myChart = echarts.init(document.getElementById("bar"));
      const labels = this.labels;
      const seriesData = this.seriesData;
      var option;
      const colors = [
        [
          { offset: 0, color: "rgba(26, 132, 191, 1)" },
          { offset: 1, color: "rgba(52, 163, 224, 0.08)" },
        ],
        [
          { offset: 0, color: "rgba(137, 163, 164, 1)" },
          { offset: 1, color: "rgba(137, 163, 164, 0.08)" },
        ],
        [
          { offset: 0, color: "rgba(44, 166, 166, 1)" },
          { offset: 1, color: "rgba(44, 166, 166, 0.08)" },
        ],
        [
          { offset: 0, color: "rgba(34, 66, 186, 1)" },
          { offset: 1, color: "rgba(34, 66, 186, 0.08)" },
        ],
      ];
      console.log(labels, seriesData);
      option = {
        grid: {
          top: "10%",
          left: "8%",
          right: "8%",
        },
        xAxis: {
          data: this.BarX,
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
        series: getSeriesData(),
      };
    },
  },
};
</script>
  
  <style lang="less" scoped>
@font-face {
  font-family: "YouSheBiaoTiHei";
  src: url(@/assets/font-family/YouSheBiaoTiHei-2.ttf);
}
.bar {
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