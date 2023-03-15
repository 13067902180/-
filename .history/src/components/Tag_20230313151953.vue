<template>
  <div class="tag">
    <div>
      <img src="@/assets/img/jcmysql/cjrws.png" alt="" />
      <div>采集任务数</div>
    </div>
    <div>2095个</div>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: ["statistical"],
};
</script>

<style lang="less" scoped>
.tag {
  width: 100%;
  background-color: rgba(65, 160, 246, 0.2);
  margin-right: 20px;
  height: 72px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  div {
    display: flex;
    align-self: center;
    color: #81e5ff;
    font-size: 28px;
    div {
      color: #fff;
      font-size: 18px;
    }
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
}
</style>