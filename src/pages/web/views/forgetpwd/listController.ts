import { Component, Vue, Prop } from "vue-property-decorator";
import { CommonAdminUtil } from "../../commons/CommonAdminUtil";
import { ToolsApi } from "../../apis/ToolsApi";
import { UserApi } from "../../apis/UserApi";
import areaCode from '../../assets/js/area_code'
import { VerCodeModel } from "@/models/ToolsModel";
import Utils from "@/utils/index";
import Header from '../../components/Header.vue';
import BaseVue from '../../commons/BaseAdminVue';

@Component({
  components: {
    Header
  }
})
export default class Layout extends BaseVue {
  public loginType: number = 1
  public regForm = {
    nationalCode: '86',
    phoneNumber: '',
    email: '',
    newPwd: '',
    confirmPwd: '',
    captcha: '',
  }
  public areaOptions = areaCode
  public smsCountDownNum: number = 0;
  public smsRequestID: string = ''
  public isNextStep: boolean = true

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
    } else if (value !== this.regForm.newPwd) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  };
  
  public regRules = {
    nationalCode: [
      { required: true, message: "请选择国别区号", trigger: "blur" },
    ],
    phoneNumber: [
      { required: true, message: "请输入电话号码", trigger: "blur" },
    ],
    email: [{ required: true, message: "请输入电子邮件", trigger: "blur" }],
    captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    newPwd: [{ required: true, validator: this.validatePass, trigger: "blur" }],
    confirmPwd: [{ required: true, validator: this.validatePass2, trigger: "blur" }],
  };

  async created() {}

  async mounted() {}

  changeRegType (type: number) {
    this.loginType = type;
    (this.$refs["regForm"] as any).resetFields();
  }

  /**
   * 触发极验
   */
   getCaptcha() {
    if (this.loginType === 1 && !this.regForm.phoneNumber) {
      this.$message.info('请先输入手机号!')
      return
    }
    
    if (this.loginType === 2 && !this.regForm.email) {
      this.$message.info('请先输入邮箱号!')
      return
    }

    if (this.smsCountDownNum > 0) {
      this.$message.error('请稍后重试!')
    }

    const config = {
      enableDarkMode: true,
      bizState: Math.random(),
    };
    const _this = this
    // @ts-ignore
    const captchaInit = new TencentCaptcha(
      "2045203448",
      function(res) {
        // TODO: 极验次数限制
        if (res.ret === 0) {
          console.log(res)
          _this.getVerCode(res);
        }
        // _this.getVerCode(res);
      },
      config
    );
    captchaInit.show(); // 显示验证码
  }

  /**
   * 获取sms验证码
   */
   public async getVerCode(data?: any) {
    const options = {
      // ticket: data.ticket,
      // randstr: data.randstr,
      type: this.loginType,
      address: this.loginType === 1 ? this.regForm.phoneNumber : this.regForm.email,
      code_type: 1,
      mobileArea: this.loginType === 1 ? this.regForm.nationalCode : "",
    };
    const backData = await new UserApi().sendsms2(options);
    if (backData.status === 200) {
      this.$message.success("验证码发送成功");//倒计时
      this.smsCountDownNum = 60;
      const sefl = this;
      Utils.countDown(this.smsCountDownNum, 1, (n: number) => {
          sefl.smsCountDownNum = n;
      });
    } else {
      this.$message.error(backData.message);
    }
  }

  /**
   * 确定验证码是否填写正确
   * @returns 
   */
  async goNextStep() {
    if (this.loginType === 1 && !(this.regForm.phoneNumber && this.regForm.captcha)) {
      this.$message.error('请先填写手机以及验证码')
      return
    }
    if (this.loginType === 2 && !(this.regForm.email && this.regForm.captcha)) {
      this.$message.error('请先填写邮箱以及验证码')
      return
    }
    const options = {
      captcha: this.regForm.captcha,
      address: this.loginType === 1 ? this.regForm.phoneNumber : this.regForm.email,
    }
    const backData = await new UserApi().verifysms2(options)
    if (backData.status === 200) {
      this.smsRequestID = backData.data.requestId
      this.isNextStep = !this.isNextStep
    } else {
      this.$message.error('验证码错误，请重新填写!')
    }
  }

  async comfirmResetPwd() {
    if (!(this.regForm.newPwd && this.regForm.confirmPwd)) {
      this.$message.info('请填写密码!')
      return
    }
    const options = {
      pwd: this.regForm.confirmPwd,
      requestId: this.smsRequestID
    }
    const backData = await new UserApi().resetpwd(options)
    if (backData.status === 200) {
      this.$message.success('密码重设成功，即将前往登录页面')
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    } else {
      this.$message.success('密码重设失败，请重试!')
    }
  }

}
