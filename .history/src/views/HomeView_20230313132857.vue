<template>
  <div class="home">
    <dv-full-screen-container> </dv-full-screen-container>
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
  background: url("@/assets/img/background.png") no-repeat center;
  background-size: 100% 100%;
}
</style>
