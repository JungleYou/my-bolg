<template>
  <div class="blog">
    <el-row>
      <el-col :span="6" class="left">
        <userInfo class="user"></userInfo>
        <myNotice></myNotice>
      </el-col>
      <el-col :span="18">
        <div class="mains">
          <div class="title">
            <header>标题</header>
            <h4>发布时间:2023-10-19 | 更新时间:2024-10-19</h4>
            <h6>字数统计:2000 | 阅读量:3000 | 评论数:900 | 点赞量:1200</h6>
          </div>
          <div class="text">
            <markDown></markDown>
          </div>
          <div class="comment">
            <myComment></myComment>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "blogDetail",
};
</script>

<style lang="less" scoped>
.blog {
  padding: 60px 20px;
  margin-top: -60px;
  position: relative;
  background: url("~@/assets/3.JPG") no-repeat;
  background-size: cover;
  .left {
    position: sticky;
    top: 60px;
    .user {
      margin-bottom: 20px;
    }
  }
  .mains {
    margin-left: 20px;
    .title {
      height: 300px;
      border-radius: 10px;
      color: @white;
      padding: 50px 0;
      background: url("~@/assets/1.JPG") no-repeat;
      background-size: cover;
      position: relative;
      text-align: center;
      box-sizing: border-box;
      header {
        font-size: 40px;
        font-weight: 900;
      }
    }
    .text {
      margin-top: 20px;
      border-radius: 10px 10px 0 0;
      color: @black;
      overflow: hidden;
    }
    .comment {
      padding: 10px;
      background-color: @white;
    }
  }
}
</style>