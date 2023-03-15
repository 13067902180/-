<template>
  <div class="list">
    <div class="title">数据交换情况</div>
    <div class="FirstList">
      <div class="ListLi" v-for="item in list">
        <img :src="item.url" alt="" />
        <div class="ListText">
          <div>{{ item.name }}</div>
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
          url: require("../assets/img/jcmysql/cjrws.png"),
          name: "采集任务数",
          num: "2095个",
          color: "",
        },
        {
          url: require("@/assets/img/jcmysql/cjsjl.png"),
          name: "采集数据量",
          num: "81万条",
          color: "",
        },
        {
          url: require("@/assets/img/jcmysql/jrjkdys.png"),
          name: "今日接口调用数",
          num: "4.8万次",
          color: "",
        },
        {
          url: require("@/assets/img/jcmysql/jryhs.png"),
          name: "接入用户数",
          num: "415家",
          color: "",
        },
        {
          url: require("@/assets/img/jcmysql/jryhs.png"),
          name: "接入用户数",
          num: "415家",
          color: "",
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
    font-size: 20px;
  }
  .FirstList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-left: 36px;

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
      }
    }
  }
}
</style>