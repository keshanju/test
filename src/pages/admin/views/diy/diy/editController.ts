/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 14:06:40
 * @LastEditTime: 2019-09-20 14:06:40
 * @LastEditors: your name
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BoxExpress from "@/box.all";
import { ArticleClassApi } from "../../../apis/ArticleApi";
import { ArticleClassModel } from '@/models/ArticleClassModel';
import my_nav from '../../../components/my_nav.vue';
import { Loading } from 'element-ui';
import { ClassUtil } from '../../../utils/ClassUtil';
import { DiyApi, DiyClassApi } from '@/pages/admin/apis/DiyApi';
import BaseVue from '@/pages/admin/commons/BaseAdminVue';
import Tinymce from '../../../components/Tinymce/index.vue';
import Editor from '@tinymce/tinymce-vue';

@Component({
  components: {
    my_nav,
    Tinymce,
    'tinymce-editor': Editor
  }
})
export default class List extends BaseVue {

  private _DiyApi = new DiyApi();
  private loading: boolean = false;
  private class_list: { id: Number, name: string }[]=[];

  private form: any = {
    class_id:0
  };

  async created() {
    this.title = "单页图文";
    this._DiyApi = new DiyApi();
    let d = await new DiyClassApi().getList();
    this.class_list = [{id:0,name:"请选择"},...d.data];
  }

  async mounted() {
    let strId = this.getParam("id");
    if (strId != "") {
      this.loading = true;
      let d = await this._DiyApi.getModel(Number(strId));
      this.form = d.data;
      this.loading = false
    }
  }
  /**
   * 表单提交
   */
  async onSubmitHandler() {
    this.validateForm("form",
      async () => {
        this.loading = true;
        if (this.form.id == null || this.form.id == 0) {
          let a = await new DiyApi().setAdd(this.form);
          this.loading = false;
          return a;
        }
        else {
          let a = await new DiyApi().setUpdate(this.form.id, this.form);
          this.loading = false;
          return a;
        }
      },(flag:boolean)=>{
        if(flag){
          //this.goback();
        }
      });
  }

  onReturnHandler() {
    this.goback();
  }
}