/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-07 09:36:37
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/common/BaseVue";
import BoxExpress from "@/box.all";
import { AdminApi, AdminRoleApi } from "../../apis/AdminApi";
import { AdminModel } from "@/models/AdminModel";
import my_nav from '../../components/my_nav.vue';
import { AdminRoleModel } from '@/models/AdminRoleModel';
import Enumerable from 'linq';
import { BaseResult } from '@/models/BaseModel';

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
    title: "管理员编辑"
  };

  //表单
  private form: AdminModel = {
    role_ids: 1
  };
  private rules: any = {};
  private title = "管理员";
  private _AdminApi = new AdminApi();
  private adminRoleApi = new AdminRoleApi();
  private adminRoleList: AdminRoleModel[] = [];
  private loading: boolean = false;

  async created() {
    this._AdminApi = new AdminApi();
    this.adminRoleApi = new AdminRoleApi();
    let d = await this.adminRoleApi.getList();
    this.adminRoleList = d.data;
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
    let d = await this._AdminApi.getListPager(
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
  async onRowEditHandler(row: AdminModel) {
    this.dialog.show = true;
    this.form = row;
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: AdminModel) {
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this._AdminApi.setDelete(row.id);
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
    (this.$refs["form"] as any).validate(async (valid) => {
      let result: BaseResult;
      if (this.form.id == 0) {
        result = await this._AdminApi.setAdd(this.form);
      } else if (this.form.id > 0) {
        result = await this._AdminApi.setUpdate(this.form.id, this.form);
      }
      if (result.code != 0) {
        this.$alert(result.msg, '失败!', {
          confirmButtonText: '确定',
          type: "error",
          callback: action => {

          }
        });
      } else {
        await this.getListPager();
        this.dialog.show = false;
        this.$message.success("操作数据成功!");
      }
    });
  }
  //#endregion

  private AdminRoleName(role_id: number): string {
    let model = Enumerable.from(this.adminRoleList).firstOrDefault(p => p.id == role_id);
    return model.name;
  }
}