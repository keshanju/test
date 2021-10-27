/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 17:01:34
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/common/BaseVue";
import BoxExpress from "@/box.all";
import { ProductApi, ProductAddressApi, ProductBrandApi, ProductClassApi, ProductCommentApi, ProductOrderApi, ProductPaymentApi, ProductReportApi, ProductShipmentApi, ProductTopicClassApi } from "../../apis/ProductApi";
import { ProductOrderModel, ProductShipmentModel } from "@/models/ProductModel";
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';
import { AxiosUtil } from '@/utils/AxiosUtil';
import { BasePager } from '@/models/BaseModel';
var app0;
@Component({
  components: {
    my_nav
  },
  filters: {
    /**
  * 订单状态区分
  */
    statusFilter: (ele) => {
      let flag = "";
      switch (ele) {
        case 0:
          flag = "未支付"
          break
        case 1:
          flag = "已取消"
          break
        case 2:
          flag = "已支付"
          break
        case 3:
          flag = "已发货"
          break
        case 4:
          flag = "已收货"
          break
        case 5:
          flag = "已完成"
          break
      }
      return flag;
    },
    shipTypeFilter: (ele) => {
      if(ele!=null||ele!=undefined){
        let a=app0.wuliuListArr.find((item)=>{
          return item.id==ele
         })
        if(a){
        return a.name
      }
      }
    }
  }
})
export default class List extends BaseVue {
  private formSearch: any = {};
  private formFilter: any = {};
  private clickbtn = 0;//点击的按钮
  public wuliuListArr: ProductShipmentModel[] = []//物流列表
  private editorderid = 0;//需要操作的订单id
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
    title: "发货信息"
  };

  private dialog_order: any = {
    width: "800px",
    show: false,
    title: "订单详情"
  }
  //物流表单验证
  wuliurules = {
    wuliuNumber: [{
      required: true, message: "请输入运单号!", trigger: "blur"
    }],
    wuliutype: [{
      required: true, message: "请选择物流公司!", trigger: "change"
    }]
  }

  //表单
  private form: any = {};
  private form1: any = {};
  private title = "订单管理";
  private _ProductOrderApi = new ProductOrderApi();
  private loading: boolean = false;
  created() {
    this._ProductOrderApi = new ProductOrderApi();
  }

  async mounted() {
    this.loading = true;
    await this.getListPager();
    await this.getwuliulist();
    this.loading = false;
  }

  beforeCreate() {
    app0 = this;
  }

  async sortChange() { }
  async currentChange() { }
  async getDataSelected() { }

  //#region 搜索表单
  /**
 * 搜索表单
 * @param formSearch 
 */
  public async onSearchForm(formSearch) {
    this.options.search = '';
    if (!formSearch.type) {
      this.$message.warning('请选择搜索类型');
      return false;
    }
    if (formSearch.keywords && formSearch.type) {
      let searchCon = formSearch.type + "__include__" + formSearch.keywords;
      this.options.search = searchCon
    }
    this.loading = true;
    await this.getListPager();
    this.loading = false;
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
    this.loading = true;
    await this.getListPager();
    this.loading = false;
  }

  /**
   * 数据分页
   */
  async getListPager() {
    let d = await this._ProductOrderApi.getListPager(
      this.options.page.pageSize,
      this.options.page.pageSize * (this.options.page.pageIndex - 1),
      this.options.search,
      this.options.sort
    );
    this.options.dataSource = d.data.list;
    this.options.page.totalCount = Number(d.data.total);
  }

  /**
   * 详情
   */
  async onRowEditHandler(row: ProductOrderModel) {
    // this.dialog_order.show = true;
  }
/**
 * 物流编辑
 * @param row 
 */
  async onRowShipmentHandler(row: ProductOrderModel) {
    this.editorderid = row.id;
    this.dialog.show = true;
  }

  /**
   * 退款
   */
  async onRowMoneyHandler(row: ProductOrderModel) {
   this.form1={};
   this.dialog_order.show=true;
   this.dialog_order.title="退款处理";
   this.editorderid=row.id;
  }
  // 退款原因提交
  async onSubmitRefundHandler(){
  //订单状态更改为已退款
  let param: ProductOrderModel = {};
  param.order_status=7;//订单状态更改为已退款
  let d = await this._ProductOrderApi.setUpdate(this.editorderid, param);
   if (d.code == 0) {
     this.$notify.success('提交成功！');
     this.dialog_order.show = false;
     this.loading=true;
     await this.getListPager();
     this.loading=false;
   } else {
     this.$notify.error(d.msg);
   }
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
   * 发货表单提交
   */
  async onSubmitHandler(form: any) {
    let param: ProductOrderModel = {};
    param.ship_type = this.form.wuliutype;
    param.remark = this.form.remarks;
    param.ship_no=this.form.wuliuNumber;
    param.order_status=3;//订单状态更改为已发货
    let d = await this._ProductOrderApi.setUpdate(this.editorderid, param);
    if (d.code == 0) {
      this.$notify.success('提交成功！');
      this.dialog.show = false;
      this.loading=true;
      await this.getListPager();
      this.loading=false;
    } else {
      this.$notify.error(d.msg);
    }
  }
  //#endregion

  /**
   * 获取订单数据
   * 0 未支付 1已取消 2已支付 3已发货 4已收货 5已完成 6 退款中 7已退款
   * @param val 
   */
  async getorder(val, index) {
    this.clickbtn = index;
    this.options.search = '';
    console.log(val)
    if (val !== '') {
      this.options.search = 'order_status__equal__' + val;
    }
    this.loading = true;
    await this.getListPager();
    this.loading = false;
  }

  /**
 * 获取物流公司列表
 */
  async getwuliulist() {
    let url: string = "/api/product/shipment";
    let d = await AxiosUtil.get<BasePager<ProductShipmentModel>>(url);
    this.wuliuListArr = d.data.list;
    console.log(d.data.list,333333)
  }
}