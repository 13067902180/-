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
      (this.labels = []),
        (this.seriesData = []),
        this.list.forEach((item, index) => {
          if (item.title) {
            this.title = item.title;
          } else {
            this.labels.push(item.name);
            this.seriesData.push({ label: item.name }, { value: [item.num] });
          }
        });
      let myChart = echarts.init(document.getElementById("bar"));
      const labels = this.labels;
      const seriesData = this.seriesData;
      var option;
      const colors = [
        [
          { offset: 0, color: "rgba(38, 206, 252, 1)" },
          { offset: 1, color: "rgba(16, 81, 246, 1)" },
        ],
        [
          { offset: 0, color: "rgba(38, 206, 252, 1)" },
          { offset: 1, color: "rgba(16, 81, 246, 1)" },
        ],
        [
          { offset: 0, color: "rgba(38, 206, 252, 1)" },
          { offset: 1, color: "rgba(16, 81, 246, 1)" },
        ],
        [
          { offset: 0, color: "rgba(38, 206, 252, 1)" },
          { offset: 1, color: "rgba(16, 81, 246, 1)" },
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
          data: labels,
          axisTick: {
            show: false,
          },
          axisLine: {},
        },
        yAxis: {
          type: "value",
          name: "万条",
          nameGap: 20,
          nameTextStyle: {
            align: "right",
          },
          axisTick: {
            show: false,
          },
          axisLine: {},
          splitLine: {
            show: false,
          },
        },
        series: getSeriesData(),
      };
      // 定义柱状图左侧图形元素
      const leftRect = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 19, //柱状图宽
          zWidth: 8, //阴影折角宽
          zHeight: 4, //阴影折角高
        },
        buildPath: function (ctx, shape) {
          const api = shape.api;
          const xAxisPoint = api.coord([shape.xValue, 0]);
          const p0 = [shape.x - shape.width / 2, shape.y - shape.zHeight];
          const p1 = [shape.x - shape.width / 2, shape.y - shape.zHeight];
          const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
          const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
          const p4 = [shape.x + shape.width / 2, shape.y];

          ctx.moveTo(p0[0], p0[1]);
          ctx.lineTo(p1[0], p1[1]);
          ctx.lineTo(p2[0], p2[1]);
          ctx.lineTo(p3[0], p3[1]);
          ctx.lineTo(p4[0], p4[1]);
          ctx.lineTo(p0[0], p0[1]);
          ctx.closePath();
        },
      });
      // 定义柱状图右侧以及顶部图形元素
      const rightRect = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 18,
          zWidth: 15,
          zHeight: 8,
        },
        buildPath: function (ctx, shape) {
          const api = shape.api;
          const xAxisPoint = api.coord([shape.xValue, 0]);
          const p1 = [shape.x - shape.width / 2, shape.y - shape.zHeight / 2];
          const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
          const p4 = [shape.x + shape.width / 2, shape.y];
          const p5 = [
            xAxisPoint[0] + shape.width / 2 + shape.zWidth,
            xAxisPoint[1],
          ];
          const p6 = [
            shape.x + shape.width / 2 + shape.zWidth,
            shape.y - shape.zHeight / 2,
          ];
          const p7 = [
            shape.x - shape.width / 2 + shape.zWidth,
            shape.y - shape.zHeight,
          ];
          ctx.moveTo(p4[0], p4[1]);
          ctx.lineTo(p3[0], p3[1]);
          ctx.lineTo(p5[0], p5[1]);
          ctx.lineTo(p6[0], p6[1]);
          ctx.lineTo(p4[0], p4[1]);

          ctx.moveTo(p4[0], p4[1]);
          ctx.lineTo(p6[0], p6[1]);
          ctx.lineTo(p7[0], p7[1]);
          ctx.lineTo(p1[0], p1[1]);
          ctx.lineTo(p4[0], p4[1]);
          ctx.closePath();
        },
      });

      // 注册图形元素
      echarts.graphic.registerShape("leftRect", leftRect);
      echarts.graphic.registerShape("rightRect", rightRect);

      function getSeriesData() {
        const data = [];
        seriesData.forEach((item, index) => {
          data.push({
            type: "custom",
            name: item.label,
            renderItem: function (params, api) {
              return getRenderItem(params, api);
            },
            data: item.value,
            itemStyle: {
              color: () => {
                return new echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  1,
                  colors[index]
                );
              },
            },
          });
        });
        return data;
      }

      function getRenderItem(params, api) {
        const index = params.seriesIndex;
        let location = api.coord([api.value(0) + index, api.value(1)]);
        var extent = api.size([0, api.value(1)]);
        return {
          type: "group",
          children: [
            {
              type: "leftRect",
              shape: {
                api,
                xValue: api.value(0) + index,
                yValue: api.value(1),
                x: location[0],
                y: location[1],
              },
              style: api.style(),
            },
            {
              type: "rightRect",
              shape: {
                api,
                xValue: api.value(0) + index,
                yValue: api.value(1),
                x: location[0],
                y: location[1],
              },
              style: api.style(),
            },
          ],
        };
      }
      option && myChart.setOption(option);
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