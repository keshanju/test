/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-07 09:40:01
 * @LastEditors: Please set LastEditors
 */
import { Component } from "vue-property-decorator";
import { DiyApi } from "../../apis/DiyApi";

import { DiyModel } from '@/models/DiyModel';
import my_nav from '../../components/my_nav.vue';
import Tinymce from '../../components/Tinymce/index.vue';
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

  private form: any = {};


  //列表
  private options: any = {
    dataSource: [],
    page: {
      pageSize: 20,
      totalCount: 0,
      pageIndex: 1
    }
  };

  //弹窗
  private dialog: any = {
    width: "800px",
    show: false,
    title: "单页图文编辑"
  };

  private _DiyApi = new DiyApi();
  private loading: boolean = false;

  created() {
    this.title = "单页图文";
    this._DiyApi = new DiyApi();
  }

  async mounted() {
    this.getListPager();
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
    let d = await this._DiyApi.getListPager(
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
  async onRowEditHandler(row: DiyModel) {
    // this.dialog.show = true;
    this.redirect("/admin/diy/edit/"+row.id);
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: DiyModel) {
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this._DiyApi.setDelete(row.id);
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
  async onAddHandler() {
    // this.dialog.show = true;
    this.redirect("/admin/diy/edit");
  }

  //#endregion
}