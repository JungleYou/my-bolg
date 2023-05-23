<template>
  <div class="blogs">
    <el-row :gutter="20"
      ><el-col :span="6">
        <el-image
          style="height: 200px; border-radius: 10px"
          :src="url"
        ></el-image
      ></el-col>
      <el-col :span="18">
        <div class="text">
          <h1>标题</h1>
          <h6>发布时间:2023-10-19</h6>
          <h6>更新时间:2024-10-19</h6>
          <div class="des">blog描述</div>
          <el-row class="icon">
            <el-col :span="8"><i class="el-icon-thumb">123</i></el-col>
            <el-col :span="8"><i class="el-icon-star-off">666</i></el-col>
            <el-col :span="8"><i class="el-icon-share">666</i></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "blogItem",
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="less" scoped>
.blogs {
  padding-right: 20px;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: @c-100;
  .text {
    h1 {
      margin: 10px 0;
    }
    h6 {
      margin: 5px 0;
      font-weight: 400;
    }
    .des {
      height: 60px;
      font-size: 15px;
      overflow: hidden;
      word-break: break-word;
      //   background-color: @c-200;
    }
    .icon {
      margin-top: 10px;
    }
  }
}
</style>