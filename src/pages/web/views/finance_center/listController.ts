import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import { FinanceApi } from "../../apis/FinanceApi";
import { AccountAssetsModle } from "@/models/FinanceModel";
@Component({
  components: {}
})
export default class List extends BaseVue {
  public financeData:AccountAssetsModle = new AccountAssetsModle()

  created() {

  }
  
  mounted() {
    this.getAssetsAcount()
  }

  public async getAssetsAcount() {
    const options = {
      type: 1
    }
    const backData = await new FinanceApi().getassetaccount(options)
    if (backData.status === 200) {
      console.log(backData.data)
      this.financeData = backData.data as AccountAssetsModle
    }
  }
}