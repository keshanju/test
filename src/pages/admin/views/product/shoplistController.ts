/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 17:02:46
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/common/BaseVue";
import BoxExpress from "@/box.all";
import {
  ProductApi,
  ProductAddressApi,
  ProductBrandApi,
  ProductClassApi,
  ProductCommentApi,
  ProductOrderApi,
  ProductPaymentApi,
  ProductReportApi,
  ProductShipmentApi,
  ProductTopicClassApi
} from "../../apis/ProductApi";
import { ProductBrandModel } from "@/models/ProductModel";
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
    width: "80%",
    show: false,
    title: "添加信息"
  };

  //表单
  private form: any = {};
  private title = "店铺管理";
  private loading: boolean = false;
  created() {

  }

  async mounted() {
    this.loading = false;
  }

  // 添加店铺
  onAddHandler() {
    this.dialog.show=true;
  }

  
}