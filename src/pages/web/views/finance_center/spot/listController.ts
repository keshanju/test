import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import { FinanceApi } from "../../../apis/FinanceApi";
import { AccountAssetsModle } from "@/models/FinanceModel";
import LocalStorageUtil from "@/utils/LocalStorageUtil";
import { MarketsApi } from "@/pages/web/apis/MarketApi";
@Component({
  components: {}
})
export default class List extends BaseVue {
  public coinSearchVal: string = ''
  public checkedSmallCoin: boolean = false
  public coinListData:Array<AccountAssetsModle> = []
  public symbol:any = []
  // public authToken: string = ''

  created() {
    // @ts-ignore
    // this.$socketApi.createWebSocket()
  }
  
  async mounted() {
    await this.getAssetsAcount()
    await this.getAssetCoins()
  }

  public async getAssetCoins() {
    const options = {}
    const backData = await new FinanceApi().getassetcoins(options)
    if (backData.status === 200) {
      this.coinListData = backData.data
    }
  }

  public async getAssetsAcount() {
    const options = {
      type: 1
    }
    const backData = await new FinanceApi().getassetaccount(options)
    if (backData.status === 200 && backData.data.length) {
      console.log(backData.data)
      this.coinListData = backData.data
    }
  }


  public handleChange() {

  }

  public handleWithdral() {
    
  }

  public handleDeposit() {
    
  }
}