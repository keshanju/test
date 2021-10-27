<template>
  <button class="layui-btn" :class="currentClass" v-on:click="onClickHandler">{{options.text}}</button>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  /**
   * sm md lg xs
   */
  @Prop()
  p_option!: {};

  currentClass: any = {};

  private options: any = {
    size: "",
    icon: "",
    text: "按钮",
    type: "normal", //normal,default,back,danger,success
    onClick: () => {}
  };

  /**
   * 挂载完毕
   */
  mounted() {
    this.setWatchProps();
  }

  @Watch("p_option")
  setWatchProps() {
    Object.assign(this.options, this.p_option);
    this.setWatchOptions();
  }

  setWatchOptions() {
    this.currentClass = {
      "layui-btn-sm": this.options.size == "sm",
      "layui-btn-lg": this.options.size == "lg",
      "layui-btn-xs": this.options.size == "xs",
      "layui-btn-primary": this.options.type == "normal",
      "layui-btn-danger": this.options.type == "warning"
    };
  }

  /**
   * 配置项
   */
  public option(data: any) {
    Object.assign(this.options, data);
    this.setWatchOptions();
  }

  /**
   * 点击事件
   */
  public onClickHandler() {
    if (this.options.onClick) {
      this.options.onClick(this);
    }
  }
}
</script>

