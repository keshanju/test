import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import { JumpUtil } from "@/utils/JumpUtil";

@Component({
  components: {},
})
export default class List extends BaseVue {
  public checked: boolean = false
  

  async mounted() {
  }

  public applyOtcUser() {
    if (!this.checked) {
      this.$message.error('请先勾选商家协议')
      return
    }
    JumpUtil.backOtcUserApplyForm()
  }
}
