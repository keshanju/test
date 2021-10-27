<template>
  <mavon-editor
    v-model="content"
    @imgAdd="$imgAdd"
    @change="change"
    style="min-height: 600px"
  />
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

@Component({
  components: {
    mavonEditor
  }
})
export default class User extends BaseVue {
  private content = "";
  private html = "";
  private editorOption = {};

  mounted() {}

  onEditorChange({ editor, html, text }) {
    this.content = html;
  }

  $imgAdd(pos, $file) {}

  change(value, render) {
    // render 为 markdown 解析后的结果
    this.html = render;
  }
}
</script>

