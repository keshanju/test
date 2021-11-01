import { Component, Vue, Prop } from "vue-property-decorator";
import { AdminApi } from "@/pages/admin/apis/AdminApi";
import { ModuleApi } from "../../apis/ModuleApi";
import { CommonAdminUtil } from "../../commons/CommonAdminUtil";
import { ToolsApi } from "../../apis/ToolsApi";
import areaCode from '../../assets/js/area_code'
import { VerCodeModel } from "@/models/ToolsModel";
import Header from '../../components/Header.vue';
import BaseVue from '../../commons/BaseAdminVue';

@Component({
  components: {
    Header
  }
})
export default class Layout extends BaseVue {
  public loginType: string = 'phone'
  public regForm = {
    nationalCode: '',
    phoneNumber: '',
    email: '',
    oldPwd: '',
    newPwd: '',
    captcha: '',
  }
  public areaOptions = areaCode
  public vercode: number = 0
  public btnText:string = '验证码'
  public isNextStep: boolean = true

  async created() {
  }

  async mounted() {
    await this.getVerCode();
  }

  changeRegType (type: string) {
    this.loginType = type;
    (this.$refs["regForm"] as any).resetFields()
  }

  goNextStep () {
    this.isNextStep = !this.isNextStep
  }

  comfirmResetPwd() {
    
  }

  /**
   * 获取验证码
   */
  public async getVerCode() {
    // let d = await new ToolsApi().vercode();
    // this.vercode = d.data;
  }
}
