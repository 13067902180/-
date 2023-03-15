<template>
  <div class="topic">
    <div>
      <img src="@/assets/img/logo-white.png" alt="" />
    </div>
    <div>
      <span>基础数据库大屏</span>
    </div>
    <div>
      <Datatime></Datatime>
    </div>
  </div>
</template>

<script>
import Datatime from "./Datatime.vue";

export default {
  components: { Datatime },
  name: "Topic",
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