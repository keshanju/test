import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import { JumpUtil } from "@/utils/JumpUtil";
import { UserApi } from "../../apis/UserApi";
import { UserDetailModle } from "@/models/UserModel";
import { Message } from "element-ui";
@Component({
  components: {}
})
export default class List extends BaseVue {
  public userDetailInfo: UserDetailModle = new UserDetailModle();
  public phoneDialog: boolean = false;
  public emailDialog: boolean = false;
  public btnText: string = "验证码";
  public disabled: boolean = false;
  public isEditOrBind: number = 1; // 1是编辑 2是绑定
  public authPhoneForm = {
    moneyPwd: '',
    newMobile: '',
    requestId: '',
    emailRequestId: '',
    phoneRequestId: '',
    code: '',
    emailCode: '',
    phoneCode: '',
  }
  public authEmailForm = {
    moneyPwd: '',
    newEmail: '',
    requestId: '',
    emailRequestId: '',
    phoneRequestId: '',
    code: '',
    emailCode: '',
    phoneCode: '',
  }
  public authPhoneRules = {
    
  }

  async mounted() {
    this.getUserDetail()
  }

  async getUserDetail() {
    const backData = await new UserApi().getuserdetail()
    if (backData.status === 200) {
      this.userDetailInfo = backData.data
    } else {
      this.$message.error('数据获取失败')
    }
  }

  public goUcAuth() {
    JumpUtil.backUcAuth()
  }

  public editUserPhone() {
    this.isEditOrBind = 1
    this.phoneDialog = true
  }

  public bindUserPhone() {
    this.isEditOrBind = 2
    this.phoneDialog = true
  }

  public editUserEmail() {
    this.isEditOrBind = 1
    this.emailDialog = true
  }

  public bindUserEmail() {
    this.isEditOrBind = 2
    this.emailDialog = true
  }

  public getPhoneCode() {

  }

  public getEmailCode() {

  }

  public handleClose() {

  }
}