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
      value: `# 123`,
    };
  },
};
</script>

<style lang="less" scoped>
</style>