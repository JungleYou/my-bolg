<template>
  <div class="content">
    <el-row type="flex" justify="space-between">
      <el-col>
        <header class="title" @click="toIndex">YYS的个人博客</header></el-col
      >
      <el-col>
        <ul class="nav">
          <li @click="toMusic"><i class="el-icon-s-home"></i>音乐项目</li>
          <li @click="toTimeLine"><i class="el-icon-tickets"></i>时间轴</li>
          <li><i class="el-icon-thumb"></i>关于</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "topNav",
  methods: {
    toMusic() {
      open("http://117.50.177.183/music", "_blank");
    },
    toIndex() {
      this.$router.push({ name: "homePage" });
    },
    toTimeLine() {
      this.$router.push({ name: "timeLine" });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    font-size: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: @black;
    opacity: 0.1;
  }
  .title {
    line-height: 60px;
    text-indent: 1em;
    font-size: 30px;
    color: @white;
    cursor: pointer;
  }
  .nav {
    li {
      margin: 0 20px;
      color: @white;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid @c-200;
      }
    }
  }
}
</style>