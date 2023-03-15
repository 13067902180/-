<template>
  <dv-full-screen-container>
    <div class="home">
      <Topic />
      <Header></Header>
    </div>
  </dv-full-screen-container>
</template>

<script>
import Topic from "@/components/Topic.vue";
import Header from "@/components/Header.vue";
// @ is an alias to /src
Topic;
export default {
  name: "HomeView",
  components: {
    Topic,
    Header,
  },
};
</script>
<style lang="less" scoped>
#dv-full-screen-container {
  background: url("@/assets/img/jcmysql/jcbackground.png") no-repeat center;
  background-size: 100% 100%;
}
.home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-right: 45px;
  padding-left: 45px;
}
.topic {
  margin-top: 30px;
}
.header {
  margin-top: 50px;
}
</style>
