<template>
  <div class="not">
    <div class="title">
      <i class="el-icon-message-solid"></i>
      <h3>公告</h3>
    </div>
    <div class="text">该博客正在努力开发中...</div>
  </div>
</template>

<script>
export default {
  name: "myNotice",
};
</script >

<style lang="less" scoped>
.not {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: @c-100;
  .title {
    font-size: 25px;
    i {
      color: @c-600;
    }
    h3 {
      margin: 0;
      display: inline-block;
    }
  }
  .text {
    width: 100%;
    height: 150px;
    margin-top: 20px;
    line-height: 30px;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
}
</style>