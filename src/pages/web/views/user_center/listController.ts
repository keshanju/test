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
  public loginPwdDialog: boolean = false;
  public tradePwdDialog: boolean = false;
  public disabled: boolean = false;
  public btnText: string = "验证码";
  public verifyType: number = 1 // 1手机 2邮箱
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
  public authTradepwdForm = {
    moneyPwd: '',
    confirmMoneyPwd: '',
    code: '',
    requestId: ''
  }
  
  public validatePass: Function = (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请输入密码"));
    } else {
      callback();
    }
  };
  
  public validatePass2: Function = (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请再次输入密码"));
    } else if (value !== this.authTradepwdForm.moneyPwd) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  };

  public authPhoneRules = {
    newMobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
    moneyPwd: [{ validator: this.validatePass, trigger: "blur" }],
    code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    phoneCode: [{ required: true, message: "请输入手机验证码", trigger: "blur" }],
    emailCode: [{ required: true, message: "请输入邮箱验证码", trigger: "blur" }],
  }

  public authEmailRules = {
    newEmail: [{ required: true, message: "请输入邮箱号", trigger: "blur" }],
    moneyPwd: [{ validator: this.validatePass, trigger: "blur" }],
    code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    phoneCode: [{ required: true, message: "请输入手机验证码", trigger: "blur" }],
    emailCode: [{ required: true, message: "请输入邮箱验证码", trigger: "blur" }],
  }

  public authTradepwdRules = {
    moneyPwd: [{ validator: this.validatePass, trigger: "blur" }],
    confirmMoneyPwd: [{ validator: this.validatePass2, trigger: "blur" }],
    code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
  }

  async mounted() {
    this.getUserDetail()
  }

  /**
   * 获取用户详细信息
   */
  public async getUserDetail() {
    const backData = await new UserApi().getuserdetail()
    if (backData.status === 200) {
      this.userDetailInfo = backData.data
    } else {
      this.$message.error('数据获取失败')
    }
  }

  /**
   * 确定变更手机号、绑定手机号
   */
  public confirmPhoneSubmit() {
    (this.$refs.authPhoneForm as any).validate(async (verify, values) => {
      console.log(values)
      if (verify) {
        const optionsSet = {
          moneyPwd: this.authPhoneForm.moneyPwd, //资金密码
          newMobile: this.authPhoneForm.newMobile, //新手机号
          requestId: this.authPhoneForm.requestId, //验证码ID
          code: this.authPhoneForm.code //验证码code
        }
        const optionsBind = {
          emailCode: this.authPhoneForm.emailCode, //邮箱code
          newPhone: this.authPhoneForm.newMobile, //新手机号
          phoneCode: this.authPhoneForm.phoneCode, //手机code
          emailRequestId: this.authPhoneForm.emailRequestId, //邮箱验证码ID
          phoneRequestId: this.authPhoneForm.phoneRequestId //手机验证码ID
        }
        const backData = this.isEditOrBind===1 ? await new UserApi().setmobile(optionsSet) : await new UserApi().bindmobile(optionsBind)
        if (backData.status === 200) {
          this.isEditOrBind===1 ? this.$message.success('手机号修改成功') : this.$message.success('手机号绑定成功')
          this.getUserDetail()
          this.phoneDialog = false
        } else {
          this.$message.error(backData.message)
        }
      }
    })
  }

  /**
   * 确定变更邮箱号、绑定邮箱号
   */
  public async confirmEmailSubmit() {
    (this.$refs.authEmailForm as any).validate(async (verify, values) => {
      if (verify) {
        const optionsSet = {
          moneyPwd: this.authEmailForm.moneyPwd, //资金密码
          newEmail: this.authEmailForm.newEmail, //新手机号
          requestId: this.authEmailForm.requestId, //验证码ID
          code: this.authEmailForm.code //验证码code
        }
        const optionsBind = {
          newEmail: this.authEmailForm.newEmail, //邮箱号
          emailCode: this.authEmailForm.emailCode, //邮箱code
          phoneCode: this.authEmailForm.phoneCode, //手机code
          emailRequestId: this.authEmailForm.emailRequestId, //邮箱验证码ID
          phoneRequestId: this.authEmailForm.phoneRequestId //手机验证码ID
        }
        const backData = this.isEditOrBind===1 ? await new UserApi().setemail(optionsSet) : await new UserApi().bindemail(optionsBind)
        if (backData.status === 200) {
          this.isEditOrBind===1 ? this.$message.success('邮箱号修改成功') : this.$message.success('邮箱号绑定成功')
          this.getUserDetail()
          this.emailDialog = false
        } else {
          this.$message.error(backData.message)
        }
      }
    })
  }

  /**
   * 确定设置、重置资金密码
   */
  public async confirmSetTradePassword() {
    const options = {
      ...this.authTradepwdForm,
      type: this.verifyType
    }
    const backData = await new UserApi().setmoneypwd(options)
    if(backData.status === 200) {
      this.$message.success('资金密码设置成功!')
      this.getUserDetail()
      this.tradePwdDialog = false
    } else {
      this.$message.error('设置失败!请重试')
    }
  }
  
  /**
   * 
   */
  public async getVerifyCode() {
    if(this.userDetailInfo.bindEmail && !this.userDetailInfo.bindMobile) {
      this.verifyType = 2
      this.getEmailCode()
    } else {
      this.isEditOrBind = 2
      this.verifyType = 1
      this.getPhoneCode()
    }
  }

  public async getPhoneCode() {
    const options = {
      mobile: this.authPhoneForm.newMobile || this.userDetailInfo.mobile,
      mobileArea: '86'
    }
    // 1代表修改手机号，用新手机发送验证码， 2代表绑定手机号，用已有手机号发送验证码
    const backData = (this.isEditOrBind===1 || this.userDetailInfo.bindEmail) ? await new UserApi().sendnmobilecode(options) : await new UserApi().sendmobilecode(options) 
    if (backData.status === 200) {
      this.authPhoneForm.requestId = this.isEditOrBind===1?backData.data.requestId:''

      this.authPhoneForm.phoneRequestId = this.isEditOrBind===2?backData.data.requestId:''
      this.authEmailForm.phoneRequestId = this.isEditOrBind===2?backData.data.requestId:''

      this.authTradepwdForm.requestId = this.authTradepwdForm.moneyPwd?backData.data.requestId:''
    } else {
      this.$message.error('短信验证码获取失败')
    }
  }

  public async getEmailCode() {
    const options = {
      email: this.authEmailForm.newEmail || this.userDetailInfo.email,
    }
    // 1代表修改邮箱，用新邮箱发送验证码， 2代表绑定邮箱号，用已有邮箱号发送验证码
    const backData = (this.isEditOrBind===1 || this.userDetailInfo.bindMobile) ? await new UserApi().sendnemailcode(options) : await new UserApi().sendemailcode(options) 
    if (backData.status === 200) {
      this.authEmailForm.requestId = this.isEditOrBind===1?backData.data.requestId:''

      this.authPhoneForm.emailRequestId = this.isEditOrBind===2?backData.data.requestId:''
      this.authEmailForm.emailRequestId = this.isEditOrBind===2?backData.data.requestId:''

      this.authTradepwdForm.requestId = this.authTradepwdForm.moneyPwd?backData.data.requestId:''
    } else {
      this.$message.error('邮箱验证码获取失败')
    }
  }

  /************以上为接口请求 */
  
  /************以下为页面操作 */

  public handleClose() {

  }

  public goUcAuth() {
    JumpUtil.backUcAuth()
  }

  public cancelSetTradePassword() {
    this.tradePwdDialog = false;
    (this.$refs['authTradepwdForm'] as any).resetFields()
  }

  public cancelEmailDialog() {
    this.emailDialog = false;
    (this.$refs['authEmailForm'] as any).resetFields()
  }

  public cancelPhoneDialog() {
    this.phoneDialog = false;
    (this.$refs['authPhoneForm'] as any).resetFields()
  }


  public setTradePwd() {
    this.tradePwdDialog = true
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
}