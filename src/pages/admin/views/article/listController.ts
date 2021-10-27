/*
 * @Description: 文章
 * @Author: zhanghongwei
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-07 09:38:29
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BoxExpress from "@/box.all";
import {
  ArticleApi,
  ArticleClassApi,
  ArticleTopicClassApi
} from "../../apis/ArticleApi";

import Tinymce from '../../components/Tinymce/index.vue';
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';
import BaseVue from '../../commons/BaseAdminVue';


@Component({
  components: {
    my_nav,
    Tinymce
  }
})
export default class List extends BaseVue {
  private formSearch: any = {};
  private formFilter: any = {};
  public dialogImageUrl= '';
  public dialogVisible= false;
  public fileList=[];//多图列表

  handleRemove(file, fileList) {
    console.log(file, fileList);
  }

  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  }

  //列表
  private options: any = {
    dataSource: [],
    page: {
      pageSize: 20,
      totalCount: 0,
      pageIndex: 1
    }
  };
  cc(){
    console.log(this.fileList)
  }
  dd(file,fileList){
   this.fileList=fileList
  }

  //弹窗
  private dialog: any = {
    width: "80%",
    show: false,
    title: "文章编辑"
  };

  //表单
  private form: any = {};

  //编辑器
  private editorOption: any = {};
  private class_list = [];
  private topic_class_list = [];
  private article_api = new ArticleApi();
  private article_class_api = new ArticleClassApi();
  private article_topic_class_api = new ArticleTopicClassApi();
  private loading: boolean = false;

  created() {
    this.title = "文章管理";
    this.article_api = new ArticleApi();
    this.article_class_api = new ArticleClassApi();
    this.article_topic_class_api = new ArticleTopicClassApi();
  }

  async mounted() {
    await this.getListPager();
    let d = await this.article_class_api.getList();
    this.class_list = d.data;
    let d2 = await this.article_topic_class_api.getList();
    this.topic_class_list = d2.data;
  }

  async sortChange() { }
  async currentChange() { }
  async getDataSelected() { }

  //#region 搜索表单
  /**
   * 表单搜索
   */
  private onSearchForm(form: any) { }
  //#endregion

  //#region 搜索过滤

  //#endregion

  //#region  工具条

  //#endregion

  //#region 数据表格开始
  /**
   * 分页大小改变
   */
  async onPageSizeChange(pageSize: number) {
    this.options.page.pageSize = pageSize;
    await this.getListPager();
  }

  /**
   * 分页索引改变
   */
  async onPageCurrentChange(pageIndex: number) {
    this.options.page.pageIndex = pageIndex;
    await this.getListPager();
  }

  /**
   * 数据分页
   */
  async getListPager() {
    this.loading = true;
    let d = await this.article_api.getListPager(
      "",
      this.options.page.pageSize,
      this.options.page.pageSize * (this.options.page.pageIndex - 1)
    );
    this.options.dataSource = d.data.list;
    this.options.page.totalCount = Number(d.data.total);
    this.loading = false;
  }

  /**
   * 数据编辑
   */
  async onRowEditHandler(row: any) {
    // this.loading = true;
    // let d = await this.article_api.getModel(row.id);
    // this.form = d.data;
    // this.dialog.show = true;
    // this.loading = false;
    this.redirect("/admin/article/edit/"+row.id);
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: any) {
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this.article_api.setDelete(row.id);
      if (d.code == 0) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      } else {
        this.$message({
          type: 'error',
          message: '处理失败!' + d.code + "::" + d.msg
        });
      }
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
    });
  }

  //#endregion

  //#region 表单
  /**
   * 添加表单
   */
  async onAddHandler(sender: any) {
    // this.dialog.show = true;
    this.redirect("/admin/article/edit");
  }
  /**
   * 表单提交
   */
  async onSubmitHandler(sender: any) {
    this.dialog.show = false;
  }
  //#endregion
}
