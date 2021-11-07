import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import BaseVue from '../../commons/BaseAdminVue';
import { MarketsApi } from '../../apis/MarketApi'
@Component({
  components: {
    Header,
    Footer,
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
  public tableTopData: Array<object> = []
  public tableBackData: Array<any> = []
  public symbol:any = []
  public tikerArr:[] = []
  public $socketApi: any;

  @Watch('tableBackData', { immediate: true, deep: true })
  onMarketDataChanged(newVal, oldVal) {
    if(newVal.length > 0)  {
      this.tableTopData = newVal
      return
    }
    this.tableTopData = this.tableBackData
  }

  created() {
    this.$socketApi.createWebSocket()
  }

  mounted() {
    this.initWidget()
    this.getMarketList();
  }
  
  beforeDestroy() {
    this.$socketApi.closeWebSocket()
  }
  
  public async getMarketList() {
    const options = {}
    let backData = await new MarketsApi().getList(options)
    if (backData.status === 200) {
      backData.data.map(item => {
        this.symbol.push(`ticker:${item.sellCoinName}${item.buyCoinName}`)
      })
      this.getMarketWsData();
    }
  }

  public handleRowClick(row, column, enent) {
    alert('测试跳转')
  }

  public getMarketWsData() {
    const tickerOptions = { 
      "op": "subscribe",
      "args": this.symbol
    }
    console.log(tickerOptions)
    this.$socketApi.sendSock(tickerOptions, this.getResult);
  }

  getResult(res) {
    if (res.data.length> 0) this.tableBackData = res.data
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
      "height": "170px",
      "style:": "height: 170px"
    })
    document.getElementById("myContainer").appendChild(script);
  }

}
