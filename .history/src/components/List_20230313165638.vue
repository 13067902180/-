<template>
  <div class="list">
    <div class="title">数据交换情况</div>
    <div class="FirstList">
      <div class="ListLi" v-for="item in list">
        <img :src="item.url" alt="" />
        <div class="ListText">
          <div :style="{ color: item.color }">{{ item.name }}</div>
          <div>{{ item.num }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      list: [
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
    };
  },
};
</script>

<style lang="less" scoped>
.list {
  height: 400px;
  width: 400px;
  background: url("@/assets/img/jcmysql/list.png") no-repeat;
  .title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #ffffff;
    font-size: 16px;
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
}
</style>