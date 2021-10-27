<template>
  <div>
    <div class="box-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章管理</el-breadcrumb-item>
        <el-breadcrumb-item>表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item :label="item.label.text+'：'" v-for="item in options.items" :key="item.id">
          <el-input v-if="!item.editorType||item.editorType=='boxTextBox'" v-model="form[item.dataField]" :placeholder="item.editorOptions.placeholder"></el-input>
          <el-select v-if="item.editorType=='boxSelectBox'" v-model="form[item.dataField]" :placeholder="item.editorOptions.placeholder">
            <el-option :label="item_child[item.editorOptions.displayExpr]" :value="item_child[item.editorOptions.valueExpr]" v-for="item_child in item.editorOptions.dataSource" :key="item_child.id"></el-option>
          </el-select>
          <el-input v-if="item.editorType=='boxTextArea'" type="textarea" v-model="form[item.dataField]" :placeholder="item.editorOptions.placeholder"></el-input>
          <el-date-picker v-if="item.editorType=='boxDateTime'" type="datetime" :placeholder="item.editorOptions.placeholder" v-model="form[item.dataField]"></el-date-picker>
          <el-radio-group v-if="item.editorType=='boxRadioList'" v-model="form[item.dataField]">
            <el-radio :label="item_child[item.editorOptions.displayExpr]" :value="item_child[item.editorOptions.valueExpr]" v-for="item_child in item.editorOptions.dataSource" :key="item_child.id"></el-radio>
          </el-radio-group>
          <el-checkbox-group v-if="item.editorType=='boxCheckBoxList'" v-model="form[item.dataField]">
            <el-checkbox :label="item_child[item.editorOptions.displayExpr]" :value="item_child[item.editorOptions.valueExpr]" v-for="item_child in item.editorOptions.dataSource" :key="item_child.id"></el-checkbox>
          </el-checkbox-group>
          <el-switch v-if="item.editorType=='boxSwitch'" v-model="form[item.dataField]">
          </el-switch>
          <el-checkbox v-if="item.editorType=='boxCheckBox'" v-model="form[item.dataField]">{{item.label.text}}</el-checkbox>
          <!-- <el-checkbox-group v-if="item.editorType=='boxCheckBoxList'" v-model="form[item.dataField]">
            <el-checkbox :label="item_child[item.editorOptions.displayExpr]" :value="item_child[item.editorOptions.valueExpr]" v-for="item_child in item.editorOptions.dataSource" :key="item_child.id"></el-checkbox>
          </el-checkbox-group> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="options.onSubmitForm(form)">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { BoxExpress } from "@/components/boxExpress";
import $ from "jquery";

@Component({})
export default class boxForm extends Vue {
  private form: any = {};
  private options: BoxExpress.ui.formOptions = {};

  private mounted() {
    this.options = {};
  }
  /**
   *
   */
  public option(op: BoxExpress.ui.formOptions) {
    Object.assign(this.options, op);
  }
}
</script>
<style lang="less" scoped>
.box-breadcrumb {
  padding: 15px 0 15px 0;
}
.box-pager {
  padding: 30px 24px;
}
</style>
