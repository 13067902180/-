<template>
  <div class="topic">
    <div>
      <img src="@/assets/img/logo-white.png" alt="" />
    </div>
    <div>
      <span>基础数据大屏</span>
    </div>
    <div>更新时间</div>
  </div>
</template>

<script>
export default {
  name: "Topic",
};
</script>

<style lang="less" scoped>
.topic {
  width: 100%;
  margin-top: 30px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  div {
    width: 30%;
  }
  & :nth-child(1) {
    float: left;
  }
  & :nth-child(2) {
    float: none;
    text-align: center;
  }
  & :nth-child(3) {
    text-align: right;
  }
}
</style>