<template>
  <div class="home">
    <dv-full-screen-container></dv-full-screen-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style lang="less" scoped>
#dv-full-screen-container {
  background: url("@/assets/img/background.png") no-repeat center;
  background-size: 100% 100%;
}
</style>
