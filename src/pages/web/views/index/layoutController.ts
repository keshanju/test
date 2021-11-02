import { Component, Vue, Watch } from "vue-property-decorator";
import { CommonAdminUtil } from "../../commons/CommonAdminUtil";
import { ModuleModel } from "@/models/ModuleModel";
import { MarketsApi } from '../../apis/MarketApi'
import BaseVue from '../../commons/BaseAdminVue';
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
@Component({
  components: {
    Header,
    Footer
  }
})
export default class Layout extends BaseVue {
  public items: ModuleModel[] = [];
  public init_items: ModuleModel[] = [];
  public markets: Array<object> = []

  created() {
    
  }

  public mounted() {
    this.init_items = CommonAdminUtil.getModule();
    // this.getMarketList();
  }

  public async getMarketList() {
    let backData = await new MarketsApi().getList()
    if (backData.status === 200) 
    this.markets = backData.data
  }

  //跳转
  public redirect(url: string) {
    if (!url.startsWith("/")) {
      url = "/" + url;
    }
    this.$router.push({ path: url });
  }

}
