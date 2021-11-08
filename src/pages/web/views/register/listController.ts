import { Component, Vue, Prop } from "vue-property-decorator";
import { UserApi } from "../../apis/UserApi";
import areaCode from "../../assets/js/area_code";
import { LoginReqModel } from "@/models/UserModel";
import Utils from "@/utils/index";
import Header from "../../components/Header.vue";
import BaseVue from "../../commons/BaseAdminVue";
// import MD5 from "md5";
// import message from "element-ui";

@Component({
  components: {
    Header,
  },
})
export default class Register extends BaseVue {
  public loginType: number = 1;
  public areaOptions: Array<object> = areaCode;
  public smsCountDownNum: number = 0;

  public regForm = {
    nationalCode: null,
    phoneNumber: null,
    email: null,
    pwd: "",
    confirmPwd: "",
    captcha: "",
    inviteCode: "",
    checkeAgreee: false,
  };

  public validatePass: Function = (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请输入密码"));
    } else {
      if (this.regForm.confirmPwd !== "") {
        (this.$refs["regForm"] as any).validateField("checkPass");
      }
      callback();
    }
  };

  public validatePass2: Function = (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请再次输入密码"));
    } else if (value !== this.regForm.pwd) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  };

  public validateChecked: Function = (rule, value, callback) => {
    if (!value) {
      callback(new Error("请查看协议及隐私条款"));
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
    pwd: [{ validator: this.validatePass, trigger: "blur" }],
    confirmPwd: [{ validator: this.validatePass2, trigger: "blur" }],
    captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    checkeAgreee: [{ validator: this.validateChecked, trigger: "change" }],
  };

  public changeRegType(type: number) {
    this.loginType = type;
    (this.$refs["regForm"] as any).resetFields();
  }

  getCaptcha() {
    if (this.loginType === 1 && !this.regForm.phoneNumber) {
      this.$message.error('请先输入手机号!')
      return
    }
    
    if (this.loginType === 2 && !this.regForm.email) {
      this.$message.error('请先输入邮箱号!')
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
          _this.getVerCode(res);
        }
        // _this.getVerCode(res);
      },
      config
    );
    captchaInit.show(); // 显示验证码
  }

  /**
   * 获取验证码
   */
  public async getVerCode(data?: any) {
    const options = {
      ticket: data.ticket,
      randstr: data.randstr,
      type: this.loginType,
      address:
        this.loginType === 1 ? this.regForm.phoneNumber : this.regForm.email,
      // code_type: 2,
      mobileArea: this.loginType === 1 ? this.regForm.nationalCode : "",
    };
    const backData = await new UserApi().sendsms(options);
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

  public submitRegForm() {
    (this.$refs["regForm"] as any).validate(async (valid, values) => {
      if (valid) {
        const options = {
          type: this.loginType,
          captcha: this.regForm.captcha,
          mobile: this.regForm.phoneNumber,
          email: this.regForm.email,
          mobileArea: this.regForm.nationalCode,
          inviteCode: this.regForm.inviteCode,
          // pwd: MD5.hashStr(this.regForm.pwd).toString()
          pwd: this.regForm.pwd,
        };
        const backData = await new UserApi().register(options);
        if (backData.status === 200) {
          this.$message.success("注册成功!即将跳转至登录页面");
          setTimeout(() => {
            this.$router.push({
              path: 'login'
            })
          }, 2000)
        } else {
          this.$message.error("注册失败，请重试!");
        }
      }
    });
  }

  public testRouter () {
    this.$router.push({
      path: 'login'
    })
  }
}
