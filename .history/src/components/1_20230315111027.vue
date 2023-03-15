<template>
    <div id="main" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      chart: null,
      xAxisText: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "外套"],
      yAxisData: [5, 20, 36, 10, 15, 25, 35],
    };
  },
  mounted() {
    this.chart = echarts.init(document.getElementById("main"));
    this.drawShape(); // 绘制图形
  },
  methods: {
    drawShape() {
      // 创建立方体正面图形
      const cubeShape1 = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 180, // 长方体宽度
          zWidth: 8, // 阴影折角高
          zHeight: 4, // 阴影折角宽
        },
        buildPath: (ctx, shape) => {
          const api = shape.api;
          const xAxisPoint = api.coord([shape.xValue, 0]);
          const p0 = [shape.x, shape.y];
          const p1 = [shape.x - shape.width / this.xAxisText.length, shape.y];
          const p4 = [shape.x + shape.width / this.xAxisText.length, shape.y];
          const p2 = [
            xAxisPoint[0] - shape.width / this.xAxisText.length,
            xAxisPoint[1],
          ];
          const p3 = [
            xAxisPoint[0] + shape.width / this.xAxisText.length,
            xAxisPoint[1],
          ];

          // 绘制正面
          ctx.moveTo(p0[0], p0[1]); //0
          ctx.lineTo(p1[0], p1[1]); //1
          ctx.lineTo(p2[0], p2[1]); //2
          ctx.lineTo(p3[0], p3[1]); //3
          ctx.lineTo(p4[0], p4[1]); //4
          ctx.lineTo(p0[0], p0[1]); //0
          ctx.closePath();
        },
      });

      // 创建立方体的侧面
      const cubeShape2 = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 180,
          zWidth: 8,
          zHeight: 4,
        },
        buildPath: (ctx, shape) => {
          const api = shape.api;
          const xAxisPoint = api.coord([shape.xValue, 0]);
          const p4 = [shape.x + shape.width / this.xAxisText.length, shape.y];
          const p6 = [
            shape.x + shape.width / this.xAxisText.length + shape.zWidth,
            shape.y - shape.zHeight,
          ];
          const p3 = [
            xAxisPoint[0] + shape.width / this.xAxisText.length,
            xAxisPoint[1],
          ];
          const p5 = [
            xAxisPoint[0] + shape.width / this.xAxisText.length + shape.zWidth,
            xAxisPoint[1] - shape.zHeight,
          ];

          // 绘制侧面
          ctx.moveTo(p4[0], p4[1]); //4
          ctx.lineTo(p3[0], p3[1]); //3
          ctx.lineTo(p5[0] + 6, p5[1] - 6); //5
          ctx.lineTo(p6[0] + 7, p6[1] - 8); //6
          ctx.lineTo(p4[0], p4[1]); //4
          ctx.closePath();
        },
      });
      // 创建立方体的顶
      const cubeShape3 = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 180,
          zWidth: 8,
          zHeight: 4,
        },
        buildPath: (ctx, shape) => {
          const api = shape.api;
          const p1 = [shape.x - shape.width / this.xAxisText.length, shape.y];
          const p4 = [shape.x + shape.width / this.xAxisText.length, shape.y];
          const p6 = [
            shape.x + shape.width / this.xAxisText.length + shape.zWidth,
            shape.y - shape.zHeight,
          ];
          const p7 = [
            shape.x - shape.width / this.xAxisText.length + shape.zWidth,
            shape.y - shape.zHeight,
          ];
          // 绘制顶部
          ctx.moveTo(p4[0], p4[1]); //4
          ctx.lineTo(p6[0] + 7, p6[1] - 8); //6
          ctx.lineTo(p7[0] + 7, p7[1] - 8); //7
          ctx.lineTo(p1[0], p1[1]); //1
          ctx.lineTo(p4[0], p4[1]); //4
          ctx.closePath();
        },
      });

      echarts.graphic.registerShape("cubeShape1", cubeShape1);
      echarts.graphic.registerShape("cubeShape2", cubeShape2);
      echarts.graphic.registerShape("cubeShape3", cubeShape3);
      this.initECharts();
    },
    initECharts() {
      const option = {
        dataZoom: [
          {
            show: true,
            height: 20,
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        title: {
          text: "ECharts 示例",
          left: 20,
          top: 20,
        },
        xAxis: {
          type: "category",
          data: this.xAxisText,
          interval: 0,
          axisLabel: {
            color: "#333",
          },
        },
        legend: {
          data: ["发电量", "同比"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "发电量",
            type: "custom",
            renderItem: (params, api) => {
              let location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "cubeShape1", // 正方体正面
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                          offset: 0,
                          color: "rgba(0, 197, 213, 0.39)",
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 224, 232, 1)",
                        },
                      ]),
                    },
                  },
                  {
                    type: "cubeShape2", // 正方体侧面和顶
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                          offset: 0,
                          color: "rgba(3, 132, 171, 0.38)",
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 151, 163, 1)",
                        },
                      ]),
                    },
                  },
                  {
                    type: "cubeShape3", // 正方体侧面和顶
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                          offset: 0,
                          color: "rgba(29, 249, 252, 1)",
                        },
                        {
                          offset: 1,
                          color: "rgba(29, 249, 252, 1)",
                        },
                      ]),
                    },
                  },
                ],
              };
            },
            data: this.yAxisData,
          },
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            name: "同比",
            smooth: true,
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
  watch: {},
};
</script>

