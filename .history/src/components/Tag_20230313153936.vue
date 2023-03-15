<template>
  <div class="tag">
    <div>
      <!-- <img src="{{ todo.img_url }}" alt="" /> -->
      <div>{{ todo.name }}</div>
    </div>
    <div>2095个</div>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: ["todo"],
  data() {
    return {
      todo: this.todo,
    };
  },
  mounted() {
    console.log(todo);
  },
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