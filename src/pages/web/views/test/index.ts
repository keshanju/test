import { Component, Vue, Prop } from "vue-property-decorator";
import Nav from "../../components/my_nav.vue";
import BaseVue from "../../commons/BaseAdminVue";
import { MarketsApi } from '../../apis/MarketApi'
import Socket from '@/utils/Socket'

@Component({
  components: {
    Nav,
  },
})
export default class Test extends BaseVue {
  public tableData: Array<object> = [];
  public symbol:any = []
  public $socketApi: any;

  created() {
    this.$socketApi.createWebSocket()
  }

  mounted() {
    // this.$socketApi.createWebSocket();
    // this.getMarketList()
  }

//   beforeDestroy() {
//     this.$socketApi.closeWebSocket()
//   }
  
  public async getMarketList() {
    let backData = await new MarketsApi().getList()
    if (backData.status === 200) {
      backData.data.map(item => {
        this.symbol.push(`trade:${item.sellCoinName}${item.buyCoinName}`)
      })
      this.getTradeWsData();
    } else {
      console.log(backData)
    }
  }

  getTradeWsData() {
    this.symbol.map(item => {
        const tickerOptions = { 
            "op": "subscribe",
            "args": [item]
            }
        // this.$socketApi.sendSock(tickerOptions, this.getResult);
    })
  }

  getResult(res) {
    // console.log(res.data)
    // let tempData = []
    // if (res.data.records.length !== 0) {
    //     tempData = res.data.records
    //     this.tableData = res.data.records
    // } else {
    //     this.tableData = tempData
    // }
  }

  public handleOpen() {
    // const tickerOptions = { op: "subscribe", args: ["ticker:btcusdt"] };
    // this.$socketApi.sendSock(tickerOptions, this.getResult);
  }

  public handleClose() {
    this.$socketApi.closeWebSocket()
  }
}
