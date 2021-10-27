/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-07 09:45:07
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BoxExpress from "@/box.all";
import { UserApi } from "../../apis/UserApi";
import { UserModel } from '@/models/UserModel';
import my_nav from '../../components/my_nav.vue';
import BaseVue from '../../commons/BaseAdminVue';

@Component({
  components: {
    my_nav
  }
})
export default class List extends BaseVue {
  private formSearch: any = {};
  private formFilter: any = {};
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
    title: "用户编辑"
  };

  //表单
  private form: any = {};

  private _UserApi = new UserApi();
  private loading: boolean = false;

  //验证规则
  private form_search_rules = {
    type: [{
      required: true, message: "搜索类型不能为空!", trigger: "blur"
    }],
    keywords: [{
      required: true, message: "搜索关键词不能为空!", trigger: "blur"
    }],
  };

  created() {
    this.title = "用户管理";
    this._UserApi = new UserApi();
  }

  async mounted() {
    await this.getListPager();
  }

  async sortChange() { }
  async currentChange() { }
  async getDataSelected() { }

  //#region 搜索表单
  /**
   * 表单搜索
   */
  private async onSearchForm(form: { type: string, keywords: string }) {
    this.validateFormBlank("search_form", async () => {
      await this.getListPager();
    });
  }
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
    let d = await this._UserApi.getListPager(
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
  async onRowEditHandler(row: UserModel) {
    this.dialog.show = true;
    this.form = row;
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: UserModel) {
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this._UserApi.setDelete(row.id);
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
    this.dialog.show = true;
  }
  /**
   * 表单提交
   */
  async onSubmitHandler(sender: any) {
    this.dialog.show = false;
  }
  //#endregion

  async onUserHandler(sender: any){
    console.log(sender);
  }
}