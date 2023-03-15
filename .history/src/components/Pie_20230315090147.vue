<template>
  <div class="pie">
    <div class="title">{{ title }}</div>
    <div class="main">
      <dv-scroll-board :config="config" style="width: 100%; height: 100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      title: "",
      list: "",
      config: {
        data: [],
        rowNum: 6,
        columnWidth: [100],
        align: ["center", "left"],
        oddRowBGC: "none",
        evenRowBGC: "none",
      },
    };
  },
  props: ["todo"],
  mounted() {},
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
  .FirstList {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-left: 36px;
    margin-top: 26px;

    .ListLi {
      flex: 1;
      min-width: 50%;
      display: flex;
      margin-bottom: 30px;
      text-align: left;
      img {
        width: 64px;
        height: 64px;
        margin-right: 10px;
      }
    }
    .ListText {
      div {
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        color: #ffffff;
      }
    }
  }
  .SecondList {
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 26px;
  }
}
</style>