<template>
  <div id="app">
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
  background: url("~@/assets/1.JPG") no-repeat;
  background-size: cover;
  .control {
    z-index: 1;
    position: fixed;
    top: 80vh;
    right: 30px;
  }
}
</style>
