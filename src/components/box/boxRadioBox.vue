<template>
  <!-- <div class="layui-form">
        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label" v-text="label"></label>
            <div class="layui-input-block">
                <input
                        name="radio"
                        type="radio"
                        checked=""
                        :title = "item[currentDisplayExpr]"
                        :value = "item[currentValueExpr]"
                        v-for="item in options"
                        v-model="currentValue"
                        :key="item.aaa"
                    >
        </div>
            </div>
        </div> -->
  <div class="layui-form-item layui-form-text">
    <label class="layui-form-label" v-text="label"></label>
    <div class="layui-input-block">
      <div class="layui-unselect layui-form-radio" 
        v-for="item in options" 
        :key="item.aaa" 
        :class="{'layui-form-radioed':currentValue==item[currentValueExpr]}"
        @click="changeRadio(item[currentValueExpr])"
        >
        <i class="layui-anim layui-icon"></i>
        <div>{{item[currentDisplayExpr]}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  @Prop()
  private value!: string;
  @Prop()
  private label!: string;
  @Prop()
  private options!: any[];

  @Prop()
  displayExpr!: string;
  @Prop()
  valueExpr!: string;

  currentValue: string = "";
  currentDisplayExpr: string = "";
  currentValueExpr: string = "";

  async mounted() {
    this.currentValue = this.value;
    this.currentDisplayExpr = this.displayExpr;
    this.currentValueExpr = this.valueExpr;
  }

  @Watch("currentValue")
  setItemValue(val: any) {
    this.$emit("input", val);
  }

  changeRadio(val:any){
      this.currentValue =val;
  }
}
</script>
