<template>
  <div class="chart">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Chart",
  data() {
    return {
      listfirst: false,
      listsecond: false,
      title: "",
      chart: "",
    };
  },
  props: ["todo", "type"],
  computed: {
    ...mapState("home", [{ list: "list3" }, { HomeListData: "HomeListData" }]),
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="less" scoped>
.chart {
  width: 950px;
  height: 400px;
  background: url("@/assets/img/jcmysql/chart.png") no-repeat;
  background-size: 100% 100%;
}
</style>