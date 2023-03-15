<template>
  <div class="upper">
    <list-vue :todo="list" :type="1"></list-vue>
    <!-- <list-vue></list-vue>-->
    <list-vue :todo="list2" :type="2"></list-vue>
  </div>
</template>

<script>
import ListVue from "./List.vue";

export default {
  name: "Upper",
  components: { ListVue },
  data() {
    return {
      list: [
        { title: "数据交换情况" },
        {
          url: require("../assets/img/jcmysql/ljjhs.png"),
          name: "累计交换数",
          num: "2427万条",
          color: "#81E5FF",
        },
        {
          url: require("@/assets/img/jcmysql/jrjhs.png"),
          name: "今日交换数",
          num: "2427万条",
          color: "#81E5FF",
        },
        {
          url: require("@/assets/img/jcmysql/jhjks.png"),
          name: "交换接口数",
          num: "1090万条",
          color: "#FE6C00",
        },
        {
          url: require("@/assets/img/jcmysql/jhsjl.png"),
          name: "交换数据量",
          num: "1090万条",
          color: "#FE6C00",
        },
        {
          url: require("@/assets/img/jcmysql/ycjks.png"),
          name: "异常接口数",
          num: "69个",
          color: "#FF0D0D",
        },
      ],
      list2: [
        { title: "数据交换情况" },
        { name: "湘云大学", img: require("@/assets/img/jcmysql/jryh.png") },
        { name: "杭州师范大学", img: require("@/assets/img/jcmysql/jryh.png") },
        { name: "绍兴文理大学", img: require("@/assets/img/jcmysql/jryh.png") },
        { name: "嘉兴大学", img: require("@/assets/img/jcmysql/jryh.png") },
        {
          name: "浙江同济科技职业学院",
          img: require("@/assets/img/jcmysql/jryh.png"),
        },
        {
          name: "浙江理工大学科技与艺术学院",
          img: require("@/assets/img/jcmysql/jryh.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.upper {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
</style>