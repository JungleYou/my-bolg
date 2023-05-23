<template>
  <div class="content">
    <!-- 顶部导航 start-->
    <div class="topNav">
      <el-collapse-transition>
        <topNav v-show="show"></topNav>
      </el-collapse-transition>
    </div>
    <!-- 顶部导航 end -->
    <!-- 主页中间按钮 start -->
    <div class="middle">
      <div class="title">
        <h1>音乐项目见上面导航栏<i class="el-icon-thumb"></i></h1>
        <h5>博客正在努力开发中...</h5>
        <div class="down">
          <i class="el-icon-arrow-down" @click="toNext"></i>
        </div>
      </div>
    </div>
    <!-- 主页中间按钮 end -->
    <div class="main">
      <el-row :gutter="20">
        <el-col :span="5" class="right"
          ><div class="user"><userInfo></userInfo></div>
          <div class="notice"><myNotice></myNotice></div>
        </el-col>
        <el-col :span="19" :offset="5"
          ><div class="blog">
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem>
            <blogItem></blogItem></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mixin } from "@/mixin";
export default {
  name: "homePage",
  mixins: [mixin],

  methods: {
    //  滑动到主页
    toNext() {
      // console.log("1");
      // console.log(document.body.clientHeight);
      let height = document.body.clientHeight;
      window.scrollTo({
        top: height,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  .topNav {
    width: 100vw;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .middle {
    position: relative;
    &::before {
      content: "";
      z-index: -3;
      width: 100vw;
      height: calc(100vh - 60px);
      position: absolute;
      top: 0;
      left: 0;
      background-color: @black;
      opacity: 0.1;
    }
    .title {
      height: 50vh;
      text-align: center;
      padding-top: calc(50vh - 60px);
      h1 {
        display: inline-block;
        width: 400px;
        height: 60px;
        margin: 0;
        font-size: 30px;
        color: @white;
        text-align: center;
      }
      h5 {
        font-size: 16px;
        color: @white;
      }
      .down {
        text-align: center;
        font-size: 50px;
        color: @white;
        margin-top: calc(50vh - 180px);
        cursor: pointer;
      }
    }
  }
  .main {
    color: @black;
    width: 100vw;
    .right {
      position: fixed;
      z-index: -2;
      top: 0px;
      .user {
        overflow: hidden;
        height: 500px;
        margin: 20px 0 0 20px;
      }
      .notice {
        height: 250px;
        border-radius: 10px;
        overflow: hidden;
        padding: 5px;
        margin: 20px 0 0 20px;
        box-sizing: border-box;
        background-color: @c-100;
      }
    }

    .blog {
      height: 1000px;
      border-radius: 10px;
      padding-right: 20px;
    }
  }
}
</style>