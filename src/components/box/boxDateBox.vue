<template>
  <div class="layui-form">
    <div class="layui-form-item layui-form-text">
      <label class="layui-form-label" v-text="label"></label>
      <div class="layui-input-block">
        <input type="text" class="layui-input" :id="dateId"  v-model="currentValue">
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class ss extends Vue {
  @Prop()
  private value!: string;
  @Prop()
  private label!: string;

  currentValue = "";
  dateId = "";

  async mounted() {
    this.currentValue = this.value;
    this.dateId = "laydate_" + Date.now();

    await this.$nextTick(() => {
      layui.use(["laydate"], () => {
        var laydate = layui.laydate;
        laydate.render({
          elem: document.getElementById(this.dateId),
          done: (dates: any) => {
            this.currentValue = dates;
          }
        });
      });
    });
  }

  @Watch("currentValue")
  public async setCurrentValue(val: any) {
    this.$emit("input", val);
  }
}
</script>