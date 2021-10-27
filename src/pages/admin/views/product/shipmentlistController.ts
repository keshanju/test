/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 17:02:32
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/common/BaseVue";
import BoxExpress from "@/box.all";
import { ProductApi, ProductAddressApi, ProductBrandApi, ProductClassApi, ProductCommentApi, ProductOrderApi, ProductPaymentApi, ProductReportApi, ProductShipmentApi, ProductTopicClassApi } from "../../apis/ProductApi";
import { ProductShipmentModel } from '@/models/ProductModel';
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';

@Component({
  components: {
    my_nav
  }
})
export default class List extends BaseVue {
  private formSearch: any = {};
  private formFilter: any = {};
  Modifyid=0;
  //列表
  private options: any = {
    dataSource: [],
    page: {
      pageSize: 20,
      totalCount: 0,
      pageIndex: 1
    },
    search: '',
    sort: ''
  };

  //弹窗
  private dialog: any = {
    width: "800px",
    show: false,
    title: "添加信息"
  };

  //表单
  private form: any = {};
  private title = "发货管理";
  private _ProductShipmentApi = new ProductShipmentApi();
  private loading: boolean = false;
  created() {
    this._ProductShipmentApi = new ProductShipmentApi();
  }

  async mounted() {
    this.loading = true;
    await this.getListPager();
    this.loading = false;
  }

  async sortChange() { }
  async currentChange() { }
  async getDataSelected() { }

  //#region 搜索表单
  /**
   * 表单搜索
   */
  /**
* 搜索表单
* @param formSearch 
*/
  public async onSearchForm(formSearch) {
    this.options.search = '';
    let searchCon = "name__include__" + formSearch.keywords;
    if (formSearch.keywords) {
      this.options.search = searchCon
    }
    this.loading = true;
    await this.getListPager()
    this.loading = false
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
    let d = await this._ProductShipmentApi.getListPager(
      this.options.page.pageSize,
      this.options.page.pageSize * (this.options.page.pageIndex - 1),
      this.options.search,
      this.options.sort
    );
    this.options.dataSource = d.data.list;
    this.options.page.totalCount = Number(d.data.total);
  }

  /**
   * 数据编辑
   */
  async onRowEditHandler(row: ProductShipmentModel) {
    this.dialog.show = true;
    this.Modifyid = row.id;
    this.form = row;
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: ProductShipmentModel) {
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this._ProductShipmentApi.setDelete(row.id);
      if (d.code == 0) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.loading = true;
        await this.getListPager();
        this.loading = false;
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
    this.form = {};
  }
 
  //#endregion

   /**
   * 重置表单
   * @param formName 
   */
  resetForm(formName) {
    console.log((this.$refs[formName] as any).resetFields)
    //@ts-ignore
    this.$refs[formName].resetFields();

  }

   /**
   * 表单提交
   */
  async onSubmitHandler(formName: any) {
    this.$refs[formName]['validate']((valid) => {
      if (valid) {
        this.submitForm()
      } else {
        console.log('error submit!!');
        return false;
      }
    });
    // this.dialog.show = false;
  }

  /**
     * 
     * 提交产品分类表单
     */
  public async submitForm() {
    let data;
    this.loading = true;
    if (this.Modifyid) {
      data = await new ProductShipmentApi().setUpdate(Number(this.Modifyid), this.form);
    } else {
      data = await new ProductShipmentApi().setAdd(this.form);
    }
    this.loading = false;
    if (data.code == 0) {
      this.dialog.show = false;
      this.$message({
        type: "success",
        message: data.msg,
        duration: 1000
      })
      this.getListPager();
    } else {
      this.loading = false;
      this.$message({
        type: "error",
        message: data.msg,
      })
    }
  }
}