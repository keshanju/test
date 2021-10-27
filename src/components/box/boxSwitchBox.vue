<template>
  <!-- <div class="layui-form">
        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label" v-text="label"></label>
            <div class="layui-input-block">
                <input
                        type="checkbox"
                        lay-skin="switch"
                        lay-text="ON|OFF"
                        v-model="currentValue"
                    >
         </div>
            </div>
        </div> -->
  <div class="layui-form-item layui-form-text">
    <label class="layui-form-label">开关</label>
    <div class="layui-input-block">
      <div class="layui-unselect layui-form-switch" :class="{'layui-form-onswitch':currentValue}" @click="changeSwitch"><i></i></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  @Prop()
  value!: number;
  @Prop()
  label!: string;

  currentValue: number = 0;
  async mounted() {
    this.currentValue = this.value;
    // await this.$nextTick(() => {
    //   layui.use(["form"], () => {
    //     let form = layui.form;
    //     form.render();
    //     form.on("switch", (data: any) => {
    //       let ss = 0;
    //       if (data.elem.checked) {
    //         ss = 1;
    //       } else {
    //         ss = 0;
    //       }
    //       this.currentValue = ss;
    //     });
    //   });
    // });
  }

  @Watch("currentValue")
  setCurrentValue() {
    this.$emit("input", this.currentValue);
  }

  changeSwitch(val: any) {
    this.currentValue = val;
  }
}
</script>