<template>
  <div class="userInfo">
    <div class="ava">
      <el-image
        :src="url"
        style="width: 150px; height: 150px; border-radius: 50%"
      ></el-image>
    </div>
    <div class="name"><h1>jungle</h1></div>
    <div class="des"><h5>jungle</h5></div>
    <div class="title">
      <el-row>
        <el-col :span="8">文章</el-col>
        <el-col :span="8">标题</el-col>
        <el-col :span="8">分类</el-col>
      </el-row>
    </div>
    <div class="titleInfo">
      <el-row>
        <el-col :span="8">1</el-col>
        <el-col :span="8">2</el-col>
        <el-col :span="8">3</el-col>
      </el-row>
    </div>
    <div class="btn">
      <el-button style="width: 50%" round @click="toGit">github</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {
    toGit() {
      open("https://github.com/JungleYou", "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
.userInfo {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: @c-50;
  transition: all 0.1s;
  &:hover {
    box-shadow: 1px 1px 5px @c-300;
  }
  .ava {
    text-align: center;
    .el-image {
      cursor: pointer;
    }
  }
  .name,
  .des {
    text-align: center;
  }
  .title,
  .titleInfo {
    width: 100%;
    text-align: center;
  }
  .btn {
    margin: 10px 0;
    text-align: center;
  }
}
</style>