<template>
  <div class="markdown">
    <mavon-editor
      v-model="value"
      :subfield="false"
      :toolbarsFlag="false"
      :editable="false"
      defaultOpen="preview"
    ></mavon-editor>
    <!-- <mavon-editor
      v-model="value"
      :subfield="false"
      defaultOpen="edit"
    ></mavon-editor> -->
  </div>
</template>

<script>
export default {
  name: "markDown",
  data() {
    return {
      value: `# 这是标题 
      这是内容`,
    };
  },
};
</script>

<style lang="less" scoped>
.markdown {
  overflow: hidden;
}
</style>