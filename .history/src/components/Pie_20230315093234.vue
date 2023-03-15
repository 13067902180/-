<template>
  <div class="pie">
    <div class="title">{{ title }}</div>
    <div id="pie" style="width: 400px; height: 355px"></div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      title: "",
      list: [],
    };
  },
  props: ["todo"],
  mounted() {
    this.firstleft();
  },
  methods: {
    firstleft() {
      var echarts = require("echarts");
      this.todo.forEach((item, index) => {
        if (item.title) {
          this.title = item.title;
        } else {
          this.list.push({
            value: item.num,
            name: item.name,
            itemStyle: { color: item.color },
          });
        }
      });
      let myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        grid: {
          left: "center",
          top: "middle",
        },
        series: [
          {
            type: "pie",
            radius: ["30%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              formatter(param) {
                // correct the percentage
                return param.name + " (" + param.percent * 2 + "%)";
              },
            },

            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.list,
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "YouSheBiaoTiHei";
  src: url(@/assets/font-family/YouSheBiaoTiHei-2.ttf);
}
.pie {
  height: 400px;
  width: 400px;
  background: url("@/assets/img/jcmysql/list.png") no-repeat;
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