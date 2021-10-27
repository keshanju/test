/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-07 13:40:41
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import my_photo from "../../components/my_photo.vue";
import my_file_list from "../../components/my_file_list.vue";
import echarts from 'echarts'
import my_nav from '../../components/my_nav.vue';
import BaseVue from '../../commons/BaseAdminVue';
import { ProductOrderApi } from '../../apis/ProductApi';
import { ProductOrderModel } from '@/models/ProductModel';

@Component({
  components: {
    my_photo,
    my_file_list,
    my_nav
  },
  filters: {
    orderNoFilter: (ele) => {
      return ele
    },
    /**
     * 订单价格过滤
     */
    toThousandFilter: (ele) => {
      return Number(ele).toFixed(2);
    },
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
    /**
     * 订单按钮颜色区分
     */
    statusType: (ele) => {
      let flag = "";
      switch (ele) {
        case 0:
          flag = "info"
          break
        case 1:
          flag = "warning"
          break
        default:
          flag = "success"
      }
      return flag;
    }
  }

})
export default class Layout extends BaseVue {
  public product_order_list: ProductOrderModel[] = [];//订单列表
  created() {
    this.getorderlist();
  }
  /**
   * 获取订单列表
   */
  async getorderlist() {
    let data = await new ProductOrderApi().getList();
    if (data.code == 0) {
      this.product_order_list = data.data.list;
    }
  }
}
