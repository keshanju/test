/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-07 09:37:01
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/common/BaseVue";
import BoxExpress from "@/box.all";
import { AdminRoleApi } from "../../apis/AdminApi";
import { AdminRoleModel } from "@/models/AdminRoleModel";
import my_nav from '../../components/my_nav.vue';
import { ModuleApi } from '../../apis/ModuleApi';
import Enumerable from 'linq';
import { ModuleModel } from '@/models/ModuleModel';
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
    title: "管理员角色编辑"
  };

  //表单
  private form: AdminRoleModel = {
    id: 0
  };
  private rules: any = {
    name: {
      required: true, message: '管理员名称不能为空！'
    }
  }
  private title = "管理员角色";
  private adminRoleApi = new AdminRoleApi();
  private moduleApi = new ModuleApi();
  //模块数据
  private arr_modules: { id: number, children: any[] }[] = [];
  private defaultProps: any = {
    children: 'children',
    label: 'label'
  }

  private default_checked_keys: string[] = [];
  private checked: boolean = false; //checkbox的值
  private loading: boolean = false;
  
  async created() {
    this.adminRoleApi = new AdminRoleApi();
    this.moduleApi = new ModuleApi();
    let result = await this.moduleApi.getList();
    let items = Enumerable.from(result.data).where(p => p.parent_id == 0).toArray();
    for (const row of items) {
      let aa = {
        id: row.id,
        label: row.action_name,
        children: []
      };

      let items2 = Enumerable.from(result.data).where(p => p.parent_id == row.id).toArray();
      for (const row2 of items2) {
        aa.children.push({
          id: row2.id,
          label: row2.action_name,
        });
      }
      this.arr_modules.push(aa);
    }
  }

  async mounted() {
    this.getListPager();
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
    this.loading=true;
    let d = await this.adminRoleApi.getListPager(
      "",
      this.options.page.pageSize,
      this.options.page.pageSize * (this.options.page.pageIndex - 1)
    );
    this.options.dataSource = d.data.list;
    this.options.page.totalCount = Number(d.data.total);
    this.loading=false;
  }

  /**
   * 数据编辑
   */
  async onRowEditHandler(row: AdminRoleModel) {
    this.dialog.show = true;
    this.form = Object.assign({}, row);
    this.$nextTick(() => {
      let tree = this.$refs["tree"] as any;
      tree.setCheckedKeys([]);
      this.default_checked_keys = this.form.module_ids.split(",");
    });
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: AdminRoleModel) {
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this.adminRoleApi.setDelete(row.id);
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
    this.default_checked_keys = [];
    this.$nextTick(() => {
      let tree = this.$refs["tree"] as any;
      tree.setCheckedKeys(this.default_checked_keys);
    });

  }
  /**
   * 表单提交
   */
  async onSubmitHandler(sender: any) {
    (this.$refs["form"] as any).validate(async (valid) => {
      if (valid) {
        let modules: [] = (this.$refs["tree"] as any).getCheckedKeys();
        let form = this.form;
        form.module_ids = modules.join(",");
        let result: BaseResult;
        if (form.id == 0) {
          result = await this.adminRoleApi.setAdd(form);
        } else if (form.id > 0) {
          result = await this.adminRoleApi.setUpdate(form.id, form);
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
      } else {
        return false;
      }
    });
  }
  //#endregion

  private handleCheckChange() {

  }

  private checkedAll() {
    if (this.checked) {
      let aa = [];
      Enumerable.from(this.arr_modules).forEach((row, index) => {
        aa.push(row.id);
      });
      this.default_checked_keys = aa;
      (this.$refs["tree"] as any).setCheckedNodes(aa);
    } else {
      (this.$refs["tree"] as any).setCheckedNodes([]);
      this.default_checked_keys = [];
    }
  }
}