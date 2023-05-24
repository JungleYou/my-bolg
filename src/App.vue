<template>
  <div id="app">
    <!-- 顶部导航 start-->
    <div class="topNav">
      <el-collapse-transition>
        <topNav v-show="show"></topNav>
      </el-collapse-transition>
    </div>
    <!-- 顶部导航 end -->
    <div class="control">
      <el-collapse-transition>
        <handleBtn v-show="show"></handleBtn>
      </el-collapse-transition>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import topNav from "@/components/top-nav";
import { mixin } from "@/mixin";
export default {
  name: "App",

  data() {
    return {};
  },
  methods: {},
  mixins: [mixin],
};
</script>

<style lang="less">
ul,
li {
  list-style: none;
}
#app {
  color: pink;
  width: 100vw;
  height: 100vh;
  min-width: 1200px;

  .topNav {
    width: 100%;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .control {
    z-index: 1;
    position: fixed;
    top: 80vh;
    right: 30px;
  }
}
</style>
