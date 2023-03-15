<template>
  <div class="header">
    <Tag></Tag>
  </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
  name: "Header",
  components: { Tag },
  data() {
    return {
      statistical: [
        {
          url: "@/assets/img/jcmysql/cjrws.png",
          name: "采集任务数",
          num: "2095个",
        },
        {
          url: "@/assets/img/jcmysql/cjrws.png",
          name: "采集数据量",
          num: "81万条",
        },
        {
          url: "@/assets/img/jcmysql/cjrws.png",
          name: "今日接口调用数",
          num: "4.8万次",
        },
        {
          url: "@/assets/img/jcmysql/cjrws.png",
          name: "接入用户数",
          num: "415家",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  & :nth-last-child(1) {
    margin: 0;
  }
}
</style>