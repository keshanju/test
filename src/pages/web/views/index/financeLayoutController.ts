import { Component, Vue, Watch } from "vue-property-decorator";
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
  public markets: Array<object> = [];
  public isCollapse: boolean = false;
  public transitionName: string = 'appear-class'

  created() {}

  mounted() {}

  public async getMarketList() {
    let backData = await new MarketsApi().getList()
    if (backData.status === 200) 
    this.markets = backData.data
  }

  handleClose() {

  }

  handleOpen() {

  }

}
