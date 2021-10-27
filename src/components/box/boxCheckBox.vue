<template>
  <div>
    <div class="layui-unselect layui-form-checkbox" v-for="item in options.dataSource" :key="item.id" :class="{'layui-form-checked':options.value==item[options.valueExpr]}" @click="changeCheckd(item[options.valueExpr])">
      <span>{{item[options.displayExpr]}}</span>
      <i class="layui-icon layui-icon-ok"></i>
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
  private dataSource!: any[];

  @Prop()
  displayExpr!: string;
  @Prop()
  valueExpr!: string;

  options: any = {
    value: "",
    dataSource: [],
    displayExpr: "title",
    valueExpr: "id"
  };

  mounted() {
    this.setWatchProps();
  }

  @Watch("value")
  @Watch("dataSource")
  setWatchProps() {
    this.options.value = this.value;
    this.options.dataSource = this.dataSource;
    this.options.displayExpr = this.displayExpr ? this.displayExpr : "title";
    this.options.valueExpr = this.valueExpr ? this.valueExpr : "id";
  }

  changeCheckd(val: any) {
    this.options.value = val;
    this.$emit("input", val);
  }
}
</script>