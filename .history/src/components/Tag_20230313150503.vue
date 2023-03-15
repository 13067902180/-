<template>
  <div class="tag">
    <div>
      <img src="@/assets/img/jcmysql/cjrws.png" alt="" />
    </div>
    <div>wan</div>
  </div>
</template>

<script>
export default {
  name: "Tag",
};
</script>

<style lang="less" scoped>
.tag {
  width: 100%;
  background-color: rgba(65, 160, 246, 0.2);
  margin-right: 20px;
  height: 72px;
  border-radius: 10px;
  line-height: 72px;
  display: flex;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
  }
}
</style>