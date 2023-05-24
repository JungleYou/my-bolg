<template>
  <div class="comment">
    <h2><i class="el-icon-chat-dot-square"></i>评论</h2>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="200"
      show-word-limit
      resize="none"
    >
    </el-input>
    <div class="commit"><el-button>评论</el-button></div>
    <div class="text">
      <div class="main_comment">
        <div class="item">
          <remarkItem></remarkItem>
        </div>
        <div class="item">
          <remarkItem></remarkItem>
        </div>
        <div class="item">
          <remarkItem></remarkItem>
        </div>
        <div class="item">
          <remarkItem></remarkItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myComment",
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style lang="less" scoped>
.comment {
  span {
    font-size: 30px;
  }
  .commit {
    text-align: end;
    margin: 10px 0;
  }
  .text {
    .main_comment {
      .item {
        width: 100%;
        margin: 10px 0;
        height: 80px;
      }
    }
  }
}
</style>