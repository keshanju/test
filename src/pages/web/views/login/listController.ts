import { Component, Vue, Prop } from "vue-property-decorator";
import { AdminApi } from "@/pages/admin/apis/AdminApi";
import { ModuleApi } from "../../apis/ModuleApi";
import { CommonAdminUtil } from "../../commons/CommonAdminUtil";
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


  async created() {}

  async mounted() {}

  public submitLoginForm() {
    (this.$refs["loginForm"] as any).validate(async (valid) => {
      if (valid) {
        const options = {
          ...this.loginForm
        };
        const backData = await new UserApi().login(options);
        if (backData.status === 200) {
          const loginM: LoginModel = backData.data;
          debugger
          LocalStorageUtil.addLoginInfo(loginM);
          this.$message.success("登录成功");
          setTimeout(() => {
            this.$router.push({
              path: '/user_center'
            })
          }, 1000)
        } else {
          this.$message.error("登录失败，请重试!");
        }
      }
    });
  }
}
