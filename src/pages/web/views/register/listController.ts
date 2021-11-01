import { Component, Vue, Prop } from "vue-property-decorator";
import { AdminApi } from "@/pages/admin/apis/AdminApi";
import { ModuleApi } from "../../apis/ModuleApi";
import { CommonAdminUtil } from "../../commons/CommonAdminUtil";
import { ToolsApi } from "../../apis/ToolsApi";
import areaCode from '../../assets/js/area_code'
import { VerCodeModel } from "@/models/ToolsModel";
import my_nav from '../../components/my_nav.vue';
import BaseVue from '../../commons/BaseAdminVue';




@Component({
  components: {
    my_nav
  }
})
export default class Layout extends BaseVue {
  public loginType: string = 'phone'
  public regForm = {
    nationalCode: '',
    phoneNumber: '',
    email: '',
    pwd: '',
    confirmPwd: '',
    captcha: '',
    inviteCode: '',
    checked: false,
  }
  public areaOptions = areaCode
  public btnText:string = '验证码'
  public disabled:boolean = false

  public validatePass = (rule,value,callback) => {
    if (value === '') {
      callback(new Error('请输入密码'));
    } else {
      if (this.regForm.confirmPwd !== '') {
        (this.$refs.regForm as any).validateField('checkPass');
      }
      callback();
    }
  };

  public validatePass2 = (rule,value,callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'));
    } else if (value !== this.regForm.pwd) {
      callback(new Error('两次输入密码不一致!'));
    } else {
      callback();
    }
  };

  public validateChecked = (rule,value,callback) => {
    if (value !== true) {
      callback(new Error('请查看协议及隐私条款'));
    } else {
      callback();
    }
  };

  public regRules:object =  {
    nationalCode: [
      { required: true, message: '请选择国别区号', trigger: 'blur' },
    ],
    phoneNumber: [
      { required: true, message: '请输入电话号码', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '请输入电子邮件', trigger: 'blur' },
    ],
    pwd: [
      { validator: this.validatePass, trigger: 'blur' },

    ],
    confirmPwd: [
      { validator: this.validatePass2, trigger: 'blur' },
    ],
    captcha: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
    checked: [
      { validator: this.validateChecked, trigger: 'change' },
    ],
  }

  changeRegType (type: string) {
    this.loginType = type;
    (this.$refs["regForm"] as any).resetFields()
  }

  /**
   * 获取验证码
   */
  public async getVerCode() {
    let d = await new ToolsApi().vercode();
    // this.vercode = d.data;
  }

  public submitRegForm() {
    (this.$refs["regForm"] as any).validate((valid, message) => {
      if (valid) {
        message.success('成功')
      }
    })
  }
}
