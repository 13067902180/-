<template>
  <div class="bar">
    <div class="title">{{ title }}</div>
    <div id="pie" style="width: 400px; height: 330px"></div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
  name: "Bar",
  data() {
    return {
      title: "",
      list: this.$store.state.home.list6,
      all: 0,
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
          this.all = this.all + item.num;
          this.list.push({
            value: item.num,
            name: item.name,
            itemStyle: { color: item.color },
          });
        }
      });
      let myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption({});
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