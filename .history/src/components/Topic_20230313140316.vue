<template>
  <div class="topic">
    <div>
      <img src="@/assets/img/logo-white.png" alt="" />
    </div>
    <div>
      <span>基础数据库大屏</span>
    </div>
    <div>
      <div class="title-right">
        <div>{{ getTime() }}</div>
        <div>{{ nowDate }}</div>
        <div>{{ nowWeek }}</div>
        <div>{{ nowTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic",
  data() {
    return {
      timer: "",
      nowDate: "",
      nowWeek: "",
      nowTime: "",
    };
  },
  methods: {
    getTime() {
      this.timer = setInterval(() => {
        let timeDate = new Date();
        let year = timeDate.getFullYear();
        let mounth = timeDate.getMonth() + 1;
        let day = timeDate.getDate();
        let hours = timeDate.getHours();
        hours = hours >= 10 ? hours : "0" + hours;
        let minutes = timeDate.getMinutes();
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        let seconds = timeDate.getSeconds();
        seconds = seconds >= 10 ? seconds : "0" + seconds;
        let week = timeDate.getDay();
        let weekArr = [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ];
        this.nowDate = `${year}年${mounth}月${day}日`;
        this.nowTime = `${hours}:${minutes}:${seconds}`;
        this.nowWeek = `${weekArr[week]}`;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.topic {
  width: 100%;
  margin-top: 30px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  div {
    width: 30%;
  }
  & :nth-child(1) {
    float: left;
  }
  & :nth-child(2) span {
    float: none;
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    background: linear-gradient(to bottom, #ffffff, #b0d7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & :nth-child(3) {
    text-align: right;
  }
}
</style>