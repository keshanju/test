import { Component, Vue, Prop } from "vue-property-decorator";
import Nav from "../../components/my_nav.vue";
import BaseVue from "../../commons/BaseAdminVue";

@Component({
  components: {
    Nav,
  },
})
export default class Test extends BaseVue {
  public tableData: Array<object> = [];

  created() {
    this.$socketApi.getSock();
  }

  mounted() {}

  getConfigResult(res) {
    console.log(res.data);
  }

  public handleClick() {
    console.log('start')
    const options = { op: "subscribe", args: ["ticker:btcusdt"] };
    this.$socketApi.sendSock(options, this.getConfigResult);
  }
}
