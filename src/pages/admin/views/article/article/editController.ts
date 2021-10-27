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
import { ArticleClassApi, ArticleApi, ArticleTopicClassApi } from "../../../apis/ArticleApi";
import { ArticleClassModel } from '@/models/ArticleClassModel';
import my_nav from '../../../components/my_nav.vue';
import { Loading } from 'element-ui';
import { ClassUtil } from '../../../utils/ClassUtil';
import BaseVue from '@/pages/admin/commons/BaseAdminVue';
import Tinymce from '../../../components/Tinymce/index.vue';

@Component({
  components: {
    my_nav,
    Tinymce
  }
})
export default class List extends BaseVue {

  private editorOption: any = {};
  private class_list = [];
  private topic_class_list = [];
  private article_api = new ArticleApi();
  private article_class_api = new ArticleClassApi();
  private article_topic_class_api = new ArticleTopicClassApi();
  private loading: boolean = false;
  private dialogVisible=false;
  //表单
  private form: any = {
    classid: 0,
    is_passed: 1,
    hits: 0,
    topic_class_ids: 0
  };
  async created() {
    this.title = "文章编辑";
    this.article_api = new ArticleApi();
    this.article_class_api = new ArticleClassApi();
    this.article_topic_class_api = new ArticleTopicClassApi();
    let d = await this.article_class_api.getList();
    this.class_list = [{ id: 0, name: "请选择" }, ...d.data];
    let d2 = await this.article_topic_class_api.getList();
    this.topic_class_list = [{ id: 0, name: "请选择" }, ...d2.data];
  }

  async mounted() {

    let strId = this.getParam("id");
    if (strId != "") {
      this.loading = true;
      let d = await this.article_api.getModel(Number(strId));
      this.form = d.data;
      this.loading = false;
    }
  }

  /**
 * 表单提交
 */
  async onSubmitHandler(sender: any) {
    this.validateForm("form",
      async () => {
        this.loading = true;
        if (this.form.id == null || this.form.id == 0) {
          let a = await new ArticleApi().setAdd(this.form);
          this.loading = false;
          return a;
        }
        else {
          let a = await new ArticleApi().setUpdate(this.form.id, this.form);
          this.loading = false;
          return a;
        }
      });
  }

  async onReturnHandler(){
    this.goback();
  }
}