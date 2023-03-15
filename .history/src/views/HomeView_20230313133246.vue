<template>
  <div class="home">
    <dv-full-screen-container>
      <Topic />
    </dv-full-screen-container>
  </div>
</template>

<script>
import Topic from "@/components/Topic.vue";

// @ is an alias to /src
Topic;
export default {
  name: "HomeView",
  components: {
    Topic,
  },
};
</script>
<style lang="less" scoped>
#dv-full-screen-container {
  background: url("@/assets/img/jcbackground.png") no-repeat center;
  background-size: 100% 100%;
  padding-right: 45px;
  padding-left: 45px;
}
</style>
