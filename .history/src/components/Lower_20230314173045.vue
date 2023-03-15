<template>
  <div class="lower">
    <list-vue :todo="list" :type="1"></list-vue>
    <!-- <Charts :type="1"></Charts> -->
    <list-vue :todo="list2" :type="2"></list-vue>
  </div>
</template>

<script>
import Charts from "./Chart.vue";
import ListVue from "./List.vue";

export default {
  name: "Lower",
  components: { ListVue, Charts },
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
        { title: "接口应用详情" },
        {
          name: "数据发布的作用",
          img: require("@/assets/img/jcmysql/jrhy.png"),
        },
        {
          name: "数据发布的作用2",
          img: require("@/assets/img/jcmysql/jrhy.png"),
        },
        {
          name: "数据发布的作用3",
          img: require("@/assets/img/jcmysql/jrhy.png"),
        },
        {
          name: "数据发布的作用4",
          img: require("@/assets/img/jcmysql/jrhy.png"),
        },
        {
          name: "数据发布的作用5",
          img: require("@/assets/img/jcmysql/jrhy.png"),
        },
        {
          name: "数据发布的作用6",
          img: require("@/assets/img/jcmysql/jrhy.png"),
        },
        {
          name: "数据发布的作用7",
          name: "数据发布的作用7",
          img: require("@/assets/img/jcmysql/jrhy.png"),
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