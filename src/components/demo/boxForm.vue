<template>
    <div>
        {{formData}}
        <div v-for="item in items" :key="item.aaa">
            <boxTextBox 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="!item.editorType||item.editorType=='boxTextBox'" 
                :placeholder="item.editorOptions.placeholder"
                :ref="item.dataField"
            ></boxTextBox>
            <boxTextArea 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="item.editorType&&item.editorType=='boxTextArea'"
                :placeholder="item.editorOptions.placeholder"
            ></boxTextArea>
            <boxSelectBox 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="item.editorType&&item.editorType=='boxSelectBox'"
                :placeholder="item.editorOptions.placeholder"
                :displayExpr="item.editorOptions.displayExpr"
                :valueExpr="item.editorOptions.valueExpr"
                :options="item.editorOptions.dataSource"
            ></boxSelectBox>
            <boxSwitchBox 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="item.editorType&&item.editorType=='boxSwitch'"
                :placeholder="item.editorOptions.placeholder"
            ></boxSwitchBox>
            <boxEditorBox 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="item.editorType&&item.editorType=='boxTextEditor'"
                :placeholder="item.editorOptions.placeholder"
            ></boxEditorBox>
            <boxCheckBox 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="item.editorType&&item.editorType=='boxCheckListBox'"
                :placeholder="item.editorOptions.placeholder"
                :displayExpr="item.editorOptions.displayExpr"
                :valueExpr="item.editorOptions.valueExpr"
                :options="item.editorOptions.dataSource"
            ></boxCheckBox>
            <boxRadioBox 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="item.editorType&&item.editorType=='boxRadioBox'"
                :placeholder="item.editorOptions.placeholder"
                :displayExpr="item.editorOptions.displayExpr"
                :valueExpr="item.editorOptions.valueExpr"
                :options="item.editorOptions.dataSource"
            ></boxRadioBox>
            <boxDateBox 
                v-model="formData[item.dataField]" 
                :label="item.label.text" 
                v-if="item.editorType&&item.editorType=='boxDateBox'"
                :placeholder="item.editorOptions.placeholder"
            ></boxDateBox>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import boxTextBox from "@/components/box/boxTextBox.vue";
import boxTextArea from "@/components/box/boxTextArea.vue";
import boxSelectBox from "@/components/box/boxSelectBox.vue";
import boxSwitchBox from "@/components/box/boxSwitchBox.vue";
import boxEditorBox from "@/components/box/boxEditorBox.vue";
import boxCheckBox from "@/components/box/boxCheckBox.vue";
import boxRadioBox from "@/components/box/boxRadioBox.vue";
import boxDateBox from "@/components/box/boxDateBox.vue";

@Component({
  components: {
    boxTextBox,
    boxTextArea,
    boxSelectBox,
    boxSwitchBox,
    boxEditorBox,
    boxCheckBox,
    boxRadioBox,
    boxDateBox
  }
})
export default class Home extends Vue {
  formData: any = {};
  items: any = [];
  formList:any;
  mounted() {}

  /**
   *配置表单
   */
  public option(data: { items: []; columns: [] }|string) {
      let tt = typeof(data);
      if(tt=="string"){
        return this.formList[data as string];
      }else{
        this.formList = data;
        this.formData = this.formList.formData;
        this.items = (data as any).items;
      }
  }

  /**
   *获取指定实例
   */
  public getEditor(dataField: any): any {
    console.log(this.$refs);
    console.log(this.$refs[0]);
    console.log(this.$refs.title);
    console.log(this.$refs["title"]);
    console.log(this.$refs[this.formData["title"]]);
    return this.$refs[dataField];
  }
}
</script>

