/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-20 14:42:59
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BoxExpress from "@/box.all";
import { DiyClassApi } from "../../apis/DiyApi";
import { DiyClassModel } from "@/models/DiyClassModel";
import my_nav from '../../components/my_nav.vue';
import { ClassUtil } from '../../utils/ClassUtil';
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
    title: "单页图文分类编辑"
  };

  //表单
  private form: any = {
    classid:0,
    is_show:1
  };

  private _DiyClassApi = new DiyClassApi();
  private loading: boolean = false;
  private class_list: { id: Number, name: string }[] = [];

  async created() {
    this.title = "单页图文分类";
    this._DiyClassApi = new DiyClassApi();
    let d = await new DiyClassApi().getList();
    //this.class_list = d.data;
    this.class_list = [{ id: 0, name: "请选择" }, ...d.data];
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
    this.loading = true;
    let d = await this._DiyClassApi.getListPager(
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
  async onRowEditHandler(row: DiyClassModel) {
    this.dialog.show = true;
    this.form = row;
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: DiyClassModel) {
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this._DiyClassApi.setDelete(row.classid);
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
    this.validateForm("form",
    async () => {
      this.loading = true;
      if (this.form.classid == null || this.form.classid == 0) {
        let a = await new DiyClassApi().setAdd(this.form);
        this.loading = false;
        return a;
      }
      else {
        let a = await new DiyClassApi().setUpdate(this.form.classid, this.form);
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
* 渲染标题
* @param row 
*/
  public renderTitle(row: any) {
    return ClassUtil.GetTag(row.classname, row.classcode.length);
  }
}