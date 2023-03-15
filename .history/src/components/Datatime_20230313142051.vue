<template>
  <div class="datatime">
    <div>{{ getTime() }}</div>
    <div>更新时间 ：{{ nowDate }}</div>
    <div v-if="weekend">{{ nowWeek }}</div>
    <div class="time">{{ nowTime }}</div>
  </div>
</template>

<script>
export default {
  naem: "DataTime",
  data() {
    return {
      timer: "",
      nowDate: "",
      nowWeek: "",
      nowTime: "",
      weekend: false,
    };
  },
  methods: {
    getTime() {
      this.timer = setInterval(() => {
        let timeDate = new Date();
        let year = timeDate.getFullYear();
        let mounth = timeDate.getMonth() + 1;
        mounth = mounth >= 10 ? mounth : "0" + mounth;
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
        this.nowDate = `${year}-${mounth}-${day}`;
        this.nowTime = `${hours}:${minutes}:${seconds}`;
        this.nowWeek = `${weekArr[week]}`;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.datatime {
  width: 100%;
  height: 100%;
  display: flex;
  color: #fefefe;
  justify-content: end;
  div {
    margin-right: 20px;
  }
  .time {
    letter-spacing: 2px;
  }
  & :nth-last-child(0) {
    margin: 0px;
  }
}
</style>