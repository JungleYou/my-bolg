<template>
  <div class="content">
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
    <el-row class="main" :gutter="20" :class="isnight ? 'night' : 'day'">
      <el-col :span="6" class="left">
        <userInfo class="user" :class="isnight ? 'night' : 'day'"></userInfo>
        <myNotice :class="isnight ? 'night' : 'day'"></myNotice>
      </el-col>
      <el-col :span="18">
        <el-row :gutter="20">
          <div @click="toBlogDetail">
            <el-col :span="12" class="right"
              ><blogItem :class="isnight ? 'night' : 'day'"></blogItem
            ></el-col>
            <el-col :span="12" class="right"
              ><blogItem :class="isnight ? 'night' : 'day'"></blogItem
            ></el-col>
            <el-col :span="12" class="right"
              ><blogItem :class="isnight ? 'night' : 'day'"></blogItem
            ></el-col>
            <el-col :span="12" class="right"
              ><blogItem :class="isnight ? 'night' : 'day'"></blogItem
            ></el-col>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mixin } from "@/mixin";
import { mapState } from "vuex";
export default {
  name: "homePage",
  mixins: [mixin],

  methods: {
    //  滑动到主页
    toNext() {
      // console.log("1");
      // console.log(document.body.clientHeight);
      let height = window.screen.availHeight - 60;
      window.scrollTo({
        top: height,
        behavior: "smooth",
      });
    },
    // 去到blog详情页
    toBlogDetail(e) {
      // console.dir(e.target)
      if (e.target.nodeName === "IMG" || e.target.nodeName === "H1") {
        // console.log(1);
        this.$router.push({ name: "blogDetail" });
      }
    },
  },
  computed: {
    ...mapState("systemSet", ["isnight"]),
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  margin-top: -60px;

  .middle {
    position: relative;
    background: url("~@/assets/1.JPG") no-repeat;
    background-size: cover;
    &::before {
      content: "";
      z-index: -3;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: @black;
      opacity: 0.1;
    }
    .title {
      height: 50vh;
      text-align: center;
      padding-top: 50vh;
      color: @white;
      h1 {
        display: inline-block;
        width: 400px;
        height: 60px;
        margin: 0;
        font-size: 30px;
        text-align: center;
      }
      h5 {
        font-size: 16px;
      }
      .down {
        text-align: center;
        font-size: 50px;
        margin-top: calc(50vh - 180px);
        cursor: pointer;
      }
    }
  }

  .main {
    width: 100%;
    color: @black;
    padding: 60px 20px;
    .left {
      position: sticky;
      top: 60px;
      .user {
        margin-bottom: 20px;
      }
    }
    .right {
      margin-bottom: 20px;
    }
  }
}
</style>