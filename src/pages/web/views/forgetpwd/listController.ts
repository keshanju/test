import { Component, Vue, Prop } from "vue-property-decorator";
import { AdminApi } from "@/pages/admin/apis/AdminApi";
import { ModuleApi } from "../../apis/ModuleApi";
import { CommonAdminUtil } from "../../commons/CommonAdminUtil";
import { ToolsApi } from "../../apis/ToolsApi";

import { VerCodeModel } from "@/models/ToolsModel";
import my_nav from '../../components/my_nav.vue';
import BaseVue from '../../commons/BaseAdminVue';

@Component({
  components: {
    my_nav
  }
})
export default class Layout extends BaseVue {
  private SiteName = CommonAdminUtil.SiteName;
  //表单
  private ruleForm: any = {
    username: "",
    password: "",
    vercode: ""
  };

  private vercode: VerCodeModel = {
    img: "#"
  };
  //匹配
  private rules: any = {
    admin_name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    admin_pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
    ver_code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
  };

  private module_api = new ModuleApi();
  private loading: boolean = false;

  async created() {
    this.module_api = new ModuleApi();
  }

  async mounted() {
    await this.getVerCode();
  }

  /**
   * 提交表单
   * @param formName 
   */
  public async submitForm(formName: string) {
    (this.$refs[formName] as any).validate(async valid => {
      if (valid) {
        this.loading = true;
        let r = await new AdminApi().chkLogin(this.ruleForm);
        if (r.code == 0) {
          //保存获取到菜单
          let d = await this.module_api.getAuthList();
          CommonAdminUtil.setModule(d.data);
          this.redirect("/admin/index");
        } else {
          this.$alert(r.msg);
        }
        this.loading = false;
      } else {
        return false;
      }
    });
  }

  /**
   * 获取验证码
   */
  public async getVerCode() {
    let d = await new ToolsApi().vercode();
    this.vercode = d.data;
  }
}
