<template>
  <div class="blogs">
    <el-row :gutter="30"
      ><el-col :span="10"> <el-image :src="url"></el-image></el-col>
      <el-col :span="14">
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
  border-radius: 10px;
  overflow: hidden;
  background-color: @c-50;
  transition: all 0.1s;
  &:hover {
    box-shadow: 1px 1px 5px @c-300;
  }
  .el-image {
    height: 200px;
    border-radius: 10px;
    margin-bottom: -4px;
    min-width: 150px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .text {
    h1 {
      margin: 10px 0;
      cursor: pointer;
      &:hover {
        color: @c-300;
      }
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
    }
    .icon {
      margin-top: 10px;
      cursor: pointer;
    }
  }
}
</style>