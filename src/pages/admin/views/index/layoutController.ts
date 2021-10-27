import { Component, Vue, Watch } from "vue-property-decorator";
import Enumerable from "linq";
import { CommonAdminUtil } from "../../commons/CommonAdminUtil";
import { ModuleModel } from "@/models/ModuleModel";
import BaseVue from '../../commons/BaseAdminVue';
import DataTimeUtil from '@/utils/DateTimeUitl';
import { ElForm } from 'element-ui/types/form';

@Component({
  components: {}
})
export default class Layout extends BaseVue {
  public breakList = [];
  public items: ModuleModel[] = [];
  public init_items: ModuleModel[] = [];

  public isCollapse = false;
  public defaultActive = "1";

  //弹窗
  private dialog_pwd: any = {
    width: "800px",
    show: false,
    title: "管理员密码修改"
  };
  //表单
  private form: any = {};

  private SiteName = CommonAdminUtil.SiteName;
  private openeds: any[] = ['1'];
  private copyright_year: string = "";
  private validatePass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'));
    } else if (value !== this.form.admin_pwd) {
      callback(new Error('两次输入密码不一致!'));
    } else {
      callback();
    }
  };
  private aa;
  @Watch('$route')
  router() {
    this.getBreakList();
  }

  private form_rules = {
    admin_pwd: [{
      required: true, message: "新密码不能为空!", trigger: "blur"
    }],
    admin_pwd_two: [
      {
        required: true, message: "确认密码不能为空!", trigger: "blur"
      },
      {
        validator: this.validatePass2, trigger: "blur"
      }
    ]
  }

  created() {
    this.copyright_year = DataTimeUtil.convertDate(new Date(), "yyyy");
  }




  public mounted() {
    this.getBreakList()
    this.init_items = CommonAdminUtil.getModule();
    if (this.defaultActive == "1") {
      this.items = Enumerable.from(this.init_items)
        .where(p => p.action_type == 0 && p.parent_id == 0)
        .toArray();
    }

  }
  /**
   * 获取面包屑导航列表
   */
  public getBreakList() {
    if (this.$route.meta.bread) {
      this.breakList = this.$route.meta.bread;
    } else {
      this.breakList = []
    }
  }

  public getModuleByParentId(parent_id: number) {
    return Enumerable.from(this.init_items)
      .where(p => p.parent_id == parent_id)
      .toArray();
  }

  //跳转
  public redirect(url: string) {
    if (!url.startsWith("/")) {
      url = "/" + url;
    }
    this.$router.push({ path: url });
  }

  /**
   * 折叠菜单
   */
  public openAndCloseSilder() {
    this.isCollapse = !this.isCollapse;
  }

  public onSelectHandler(sender: any) { }

  public onSelectTopHandler(sender: any) {
    let aa = sender.toString();
    switch (aa) {
      case "1":
        {
          this.items = Enumerable.from(this.init_items)
            .where(p => p.action_type == 0 && p.parent_id == 0)
            .toArray();
        }
        break;
      case "2":
        {
          this.items = Enumerable.from(this.init_items)
            .where(p => p.action_type == 1 && p.parent_id == 0)
            .toArray();
        }
        break;
      case "3":
        {
          this.items = Enumerable.from(this.init_items)
            .where(p => p.action_type == 2 && p.parent_id == 0)
            .toArray();
        }
        break;
      case "4":
        {
          this.items = Enumerable.from(this.init_items)
            .where(p => p.action_type == 3 && p.parent_id == 0)
            .toArray();
        }
        break;
      case "5":
        {
          this.items = Enumerable.from(this.init_items)
            .where(p => p.action_type == 4 && p.parent_id == 0)
            .toArray();
        }
        break;
    }
    //展开第一个菜单
    let dd = this.items[0].id;
    this.openeds.push(dd.toString());
  }

  public onSelectLeftHandler(sender: any) {
    if (sender == "2-1") {
      this.dialog_pwd.show = true;
      this.getInstanceByKey<ElForm>("form").resetFields();
    } else if (sender == "2-2") {
      this.redirect("/admin/login")
    }
  }

  /**
   * 修改密码
   */
  public onSubmitHandler() {
    this.validateForm("form",
      () => {
        return null;
      },
      () => {

      });
  }
}
