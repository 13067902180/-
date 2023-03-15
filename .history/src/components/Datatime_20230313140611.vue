<template>
  <div class="datatime">
    <div>{{ getTime() }}</div>
    <div>{{ nowDate }}</div>
    <div>{{ nowWeek }}</div>
    <div>{{ nowTime }}</div>
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

<style>
</style>