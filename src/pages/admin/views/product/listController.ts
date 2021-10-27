/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-21 11:56:49
 * @LastEditors: Please set LastEditors
 */
import { Component } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import {
  ProductApi,
  ProductBrandApi,
  ProductClassApi
} from "../../apis/ProductApi";
import { ProductModel } from "@/models/ProductModel";

import my_nav from '../../components/my_nav.vue';
import Tinymce from '../../components/Tinymce/index.vue';
import { Loading } from 'element-ui';
import BaseVue from '../../commons/BaseAdminVue';

@Component({
  components: {
    my_nav,
    boxDataGrid,
    Tinymce
  }
})
export default class List extends BaseVue {
  private formSearch: any = {};
  private formFilter: any = {};
  private class_list: any[] = [];
  private brand_list: any[] = [];
  private loading: boolean = false;

  title = "产品管理";
  //列表
  private options: any = {
    dataSource: [],
    page: {
      pageSize: 20,
      totalCount: 0,
      pageIndex: 1
    },
    search:'',
    sort:''
  };

  //弹窗
  private dialog: any = {
    width: "80%",
    show: false,
    title: "添加信息"
  };
  //弹窗导入
  private dialog_bat_import: any = {
    width: "80%",
    show: false,
    title: "产品批量导入"
  };

  //表单
  private form: ProductModel = {};

  private form_reset: ProductModel = {
    id: 0,
    class_id: 0,
    brand_id: 0,
    stock_count: 9999,
    production_date: new Date().toUTCString(),
    market_price: 0,
    member_price: 0,
    min_price: 0,
    buy_num: 0,
    hits: 0,
    is_passed: 1,
  };

  private form_rules = {
    name: [{
      required: true, message: "产品标题不能为空!", trigger: "blur"
    }]
  }

  private product_api = new ProductApi();
  private editFiles: any[] = [];// 编辑时已上传图片初始化

  created() {
    this.product_api = new ProductApi();
  }
  /**
   * 挂载完毕执行
   */
  async mounted() {
    await this.getListPager();
    //分类
    let d = await new ProductClassApi().getList();
    this.class_list = [{ id: 0, name: "请选择" }, ...d.data];
    //品牌
    let d2 = await new ProductBrandApi().getList();
    this.brand_list = [{ id: 0, name: "请选择" }, ...d2.data];
    this.loading = false;
  }


  async sortChange() { }
  async currentChange() { }
  async getDataSelected() { }

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
    this.getListPager();
  }

  /**
   * 分页索引改变
   */
  async onPageCurrentChange(pageIndex: number) {
    this.options.page.pageIndex = pageIndex;
    this.getListPager();
  }

  /**
   * 数据分页
   */
  async getListPager() {
    this.loading = true;
    let d = await this.product_api.getListPager(
      "",
      this.options.page.pageSize,
      this.options.page.pageSize * (this.options.page.pageIndex - 1),
      this.options.search,
      this.options.sort
    );
    this.loading = false;
    if (d.code == 0) {
      this.options.dataSource = d.data.list;
      this.options.page.totalCount = Number(d.data.total);
    }

  }

  /**
   * 数据编辑
   */
  async onRowEditHandler(row: ProductModel) {
    // this.dialog.show = true;
    // this.form = row;
    this.redirect("/admin/product/edit/" + row.id)
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: ProductModel) {
    this.dataDelete(
      async () => {
        return await this.product_api.setDelete(row.id);
      },
      (flag: boolean) => {
        if (flag)
          this.getListPager();
      }
    );
  }

  //#endregion

  //#region 表单
  /**
   * 添加表单
   */
  async onAddHandler() {
    // this.dialog.show = true;
    // this.form = this.form_reset;
    this.redirect("/admin/product/edit");
  }

  /**
   * 表单提交
   */
  async onSubmitHandler() {
    return;
    this.validateForm("form",
      async () => {
        this.loading = true;
        if (this.form.id == null || this.form.id == 0) {
          let a = await new ProductApi().setAdd(this.form);
          this.loading = false;
          return a;
        }
        else {
          let a = await new ProductApi().setUpdate(this.form.id, this.form);
          this.loading = false;
          return a;
        }
      },
      (flag: boolean) => {
        if (flag) {
          this.dialog.show = false;
          this.getListPager();
        }
      });
  }
  //#endregion

  /**
   * 搜索表单
   * @param formSearch 
   */
  onSearchForm(formSearch) {
    this.options.search='';
    let searchType="class_id__equl__"+formSearch.type;
    let searchCon="name__include__"+formSearch.keywords;

    if(formSearch.type){
      this.options.search=searchType
    }
    if(formSearch.keywords){
      this.options.search=searchCon
    }
    if(formSearch.type&&formSearch.keywords){
      this.options.search=searchType+'|'+searchCon;
    }

    this.getListPager()
   
    console.log(this.options.search);
  }
 

  batImportProductHandler(){
    this.dialog_bat_import.show=true;
  }
}