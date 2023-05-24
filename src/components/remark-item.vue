<template>
  <div class="contxt">
    <el-row>
      <el-col :span="2"> <el-image :src="url"></el-image></el-col>
      <el-col :span="22">
        <el-row style="overflow: hidden; padding: 15px">
          <el-col :span="3">用户：</el-col>
          <el-col :span="21">回复</el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="3" style="padding-left: 15px; font-size: 15px"
            >2天前</el-col
          >
          <el-col class="remark" :span="3" style="cursor: pointer">回复</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "remarkItem",
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="less" scoped>
.contxt {
  width: 100%;
  height: 100%;
  background-color: @c-50;
  .el-image {
    width: 70px;
    height: 70px;
    margin-top: 5px;
    border-radius: 50%;
  }
  .remark {
    color: @c-500;
  }
}
</style>