<template>
  <quill-editor
    v-model="content"
    :options="editorOption"
  ></quill-editor>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

@Component({
  components: {
    quillEditor
  }
})
export default class User extends BaseVue {
  private content = "";
  private editorOption = {};

  mounted() {}

  onEditorChange({ editor, html, text }) {
    this.content = html;
  }
}
</script>

