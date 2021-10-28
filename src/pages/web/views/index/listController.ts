import { Component, Vue, Prop } from "vue-property-decorator";
import my_photo from "../../components/my_photo.vue";
import my_file_list from "../../components/my_file_list.vue";
import my_nav from '../../components/my_nav.vue';
import BaseVue from '../../commons/BaseAdminVue';
import { MarketsApi } from '../../apis/MarketApi'
import { MarketsWsApi } from '../../apis/MarketWsApi'
import { ProductOrderApi } from '../../apis/ProductApi';
import { ProductOrderModel } from '@/models/ProductModel';
import Ws from '@/utils/WebsocketUtil.js'
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
  public product_order_list: ProductOrderModel[] = [];
  public activeName:string = 'top'
  public tableTopData: Array<object> = []
  public symbol:any = []

  mounted() {
    this.initWidget()
    this.initWs()
    this.getMarketList();
    // this.getMarketWsData();
  }

  public handleClick() {

  }

  initWs () {

  }
  
  public async getMarketList() {
    let backData = await new MarketsApi().getList()
    if (backData.status === 200) {
      this.tableTopData = backData.data
    } else {
      console.log(backData)
    }
  }

  public getMarketWsData() {
    const options = { "op": "subscribe","args": ["ticker:" + this.symbol] }
    let backData = new MarketsWsApi().getList(options)
    console.log(backData)
    // if (backData.status === 200) {
    //   this.tableTopData = backData.data
    // } else {
    //   console.log(backData)
    // }
  }

  public initWidget() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "BTCUSDT",
          "title": "BTC/USDT"
        },
        {
          "proName": "ETHUSDT",
          "title": "ETH/USDT"
        },
        {
          "proName": "ADAUSDT",
          "title": "ADA/USDT"
        },
        {
          "proName": "DOGEUSDT",
          "title": "DOGE/USDT"
        },
        {
          "proName": "FILUSDT",
          "title": "FIL/USDT"
        },
      ],
      "colorTheme": "dark",
      "isTransparent": false,
      "showSymbolLogo": true,
      "locale": "zh_CN",
      "height": 144
    })
    document.getElementById("myContainer").appendChild(script);
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
