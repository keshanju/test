import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import my_nav from '../../components/my_nav.vue';
import { JumpUtil } from "@/utils/JumpUtil";
@Component({
  components: {
    my_nav
  }
})
export default class List extends BaseVue {

  public goUcAuth() {
    JumpUtil.backUcAuth()
  }
}