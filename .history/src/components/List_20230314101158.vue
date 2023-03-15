<template>
  <div class="list">
    <div class="title" @click="x()">{{ title }}</div>
    <div class="FirstList" v-if="listfirst">
      <div class="ListLi" v-for="(item, index) in list">
        <img :src="item.url" alt="" />
        <div class="ListText">
          <div :style="{ color: item.color }">{{ item.name }}</div>
          <div>{{ item.num }}</div>
        </div>
      </div>
    </div>
    <div class="SecondList" v-if="listsecond">
      <dv-scroll-board :config="config" style="width: 100%; height: 100%" />
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
      title: "",
      list: "",
      config: {
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
      },
    };
  },
  props: ["todo", "type"],
  methods: {
    x() {
      console.log(this.list);
    },
  },
  mounted() {
    switch (this.type) {
      case 1:
        this.listfirst = true;
        this.list = this.todo.filter((todo) => {
          return !todo.title;
        });
        this.todo.forEach((item, index) => {
          if (item.title) {
            this.title = item.title;
          }
        });
        break;
      case 2:
        this.listsecond = true;
        //   this.list = this.todo.filter((todo) => {
        //     return !todo.title;
        //   });
        //   console.log(this.list);
        this.todo.forEach((item, index) => {
          if (item.title) {
            this.title = item.title;
          }
        });
        break;
      case 3:
        break;
    }
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