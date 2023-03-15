<template>
  <div class="pie">
    <div class="title">{{ title }}</div>
    <div id="pie"></div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      title: "",
      list: "",
    };
  },
  props: ["todo"],
  mounted() {
    this.list = this.todo.filter((todo) => {
      return !todo.title;
    });
    this.todo.forEach((item, index) => {
      if (item.title) {
        this.title = item.title;
      }
    });
    console.log(this);
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
  #pie {
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 26px;
  }
}
</style>