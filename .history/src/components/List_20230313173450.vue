<template>
  <div class="list">
    <div class="title">{{ title }}</div>
    <div class="FirstList" v-if="listfirst">
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
      listfirst: false,
      listsecond: false,

      list: [],
    };
  },
  props: ["todo", "type"],
  mounted() {
    console.log(this.todo);
    this.title = this.todo.forEach((item) => {
      if (item.title) {
        return item.title;
      }
    });
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "YouSheBiaoTiHei";
  src: url(@/assets/font-family/YouSheBiaoTiHei-2.ttf);
}
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
}
</style>