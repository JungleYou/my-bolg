<template>
  <div class="content">
    <el-button icon="el-icon-sunny" circle @click="changeNight"></el-button>
  </div>
</template>

<script>
export default {
  name: "handleBtn",
  data() {
    return {
      isnight: true,
    };
  },
  methods: {
    changeNight() {
      this.isnight = !this.isnight;
      this.$store.commit("systemSet/CHANGENIGHT", this.isnight);
    },
  },
};
</script>

<style lang="less" scoped>
.el-button {
  font-size: 20px;
}
</style>