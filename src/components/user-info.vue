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
      <el-button style="width: 50%" round>github</el-button>
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
};
</script>

<style lang="less" scoped>
.userInfo {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border-radius: 10px;
  background: @c-100;
  .ava {
    text-align: center;
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