<template>
    <div id="detail" style="display:none">
        <slot/>
    </div>
</template>
<script lang="ts">
/**
 * 弹窗
 */
import $ from "jquery";
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({

})
export default class sdfsd extends Vue {
  visible = false;
  title = "弹窗";
  buttons: any[] = [];

  private mounted() {
     layer.open({
        area: ["800px", "600px"],
        offset: "60px",
        type: 1,
        content: $("#detail").html()
      });
  }
}
</script>
