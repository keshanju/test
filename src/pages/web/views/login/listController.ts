import { Component, Vue, Prop } from "vue-property-decorator";
import { JumpUtil } from '@/utils/JumpUtil'
import { UserApi } from "../../apis/UserApi";
import LocalStorageUtil from "@/utils/LocalStorageUtil";
import { LoginModel } from "@/models/UserModel";
import Header from '../../components/Header.vue';
import BaseVue from '../../commons/BaseAdminVue';

@Component({
  components: {
    Header
  }
})
export default class Layout extends BaseVue {
  
  public loginForm = {
    userName: '',
    password: ''
  };

  public validatePass: Function = (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请输入登录密码"));
    } else {
      callback();
    }
  };

  public loginRules = {
    userName: [{ required: true, message: "请输入邮箱或手机号", trigger: "blur" }],
    password: [{ validator: this.validatePass, trigger: "blur" }],
  };

  public loginLoading: boolean = false

  async created() {}

  async mounted() {}

  public goRegister() {
    JumpUtil.backRegister()
  }

  public submitLoginForm() {
    (this.$refs["loginForm"] as any).validate(async (valid) => {
      if (valid) {
        this.loginLoading = true
        const options = {
          ...this.loginForm
        };
        const backData = await new UserApi().login(options);
        if (backData.status === 200) {
          const loginM: LoginModel = backData.data;
          LocalStorageUtil.addLoginInfo(loginM);
          this.$message.success("登录成功");
          setTimeout(() => {
            this.$router.push({
              path: '/user_center/security'
            })
          }, 1000)
        } else {
          this.loginLoading = false
          this.$message.error("登录失败，请重试!");
        }
      }
    });
  }
}
