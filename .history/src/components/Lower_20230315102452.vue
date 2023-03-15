<template>
  <div class="lower">
    <pie-vue :todo="list"></pie-vue>
    <Bar></Bar>
    <list-vue :todo="list2" :type="2"></list-vue>
  </div>
</template>

<script>
import Bar from "./Bar.vue";
import Charts from "./Chart.vue";
import ListVue from "./List.vue";
import PieVue from "./Pie.vue";

export default {
  name: "Lower",
  components: { ListVue, Charts, PieVue, Bar },
  data() {
    return {
      list: [
        { title: "数据采集情况" },
        {
          name: "未采集",
          num: "150",
          color: "rgb(235,194,164)",
        },
        {
          name: "已采集",
          num: "450",
          color: "rgb(254,108,0)",
        },
      ],
      list2: [
        { title: "接口应用详情" },
        {
          name: "数据发布的作用",
          img: require("@/assets/img/jcmysql/jkyy.png"),
        },
        {
          name: "数据发布的作用2",
          img: require("@/assets/img/jcmysql/jkyy.png"),
        },
        {
          name: "数据发布的作用3",
          img: require("@/assets/img/jcmysql/jkyy.png"),
        },
        {
          name: "数据发布的作用4",
          img: require("@/assets/img/jcmysql/jkyy.png"),
        },
        {
          name: "数据发布的作用5",
          img: require("@/assets/img/jcmysql/jkyy.png"),
        },
        {
          name: "数据发布的作用6",
          img: require("@/assets/img/jcmysql/jkyy.png"),
        },
        {
          name: "数据发布的作用7",
          img: require("@/assets/img/jcmysql/jkyy.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.lower {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
</style>