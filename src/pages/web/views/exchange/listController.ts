import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from '../../commons/BaseAdminVue';
import { MarketsApi } from '../../apis/MarketApi';
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
@Component({
  components: {
    Header,
    Footer
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
  public activeName:string = 'top'

  created() {}

  mounted() {}
}
