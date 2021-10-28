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
  }

  mounted() {
    this.$socketApi.createWebSocket();
    this.$socketApi.getSock(this.getResult);
  }

  getResult(res) {
    console.log(res.data);
  }

  public handleOpen() {
    const options = { op: "subscribe", args: ["ticker:btcusdt"] };
    this.$socketApi.sendSock(options, this.getResult);
  }

  public handleClose() {
    this.$socketApi.closeWebSocket()
  }
}
