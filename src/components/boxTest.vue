<template>
  <div>
    <input type="text" :placeholder="options.placeholder" v-model="options.value" :style="style_a" :disabled="options.disabled">
    <button @click="close">close</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class boxTest extends Vue {
  @Prop()
  private value!: string | number;
  @Prop()
  private placeholder!: string;
  @Prop()
  private onValueChanged!: Function;
  @Prop()
  private onDisabled!: Function;
  @Prop()
  private style_a!: string;
  @Prop()
  private disabled!: boolean;

  public data() {
    return {
      options: {
        value: this.value,
        placeholder: this.placeholder,
        onValueChanged: this.onValueChanged,
        style_a: this.style_a,
        disabled: this.disabled,
        onDisabled: this.onDisabled
      }
    };
  }

  private mounted() {
   
    //循环监听属性
    Object.keys(this.$props).forEach((prop: string) => {
      this.$watch(prop, (value: any) => {
        this.option(prop, value);
      });
    });
    //循环属性
    Object.keys(this.$listeners).forEach((eventName: string) => {
      this.$on(eventName, e => {
        this.$emit(eventName, e);
      });
    });
  }

  public close() {
     console.log(this);
    //需要查找实例
    // /this.option("disabled", true);
    this.disabled=true;
  }

  public option(oo: any, vv: any) {
    if (typeof oo == "object") {
      Object.assign(this.$data.options, oo);
    } else {
      this.$data.options[oo] = vv;
    }
  }
}
</script>
