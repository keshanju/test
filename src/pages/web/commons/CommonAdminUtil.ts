import { BaseArray } from "@/models/BaseModel";
import { ModuleModel } from "@/models/ModuleModel";

/**
 * 后台菜单公共项
 */
export class CommonAdminUtil {

  public static SiteName = SITE_TITLE;
  
  /**
   * 设置用户登录模块信息
   * @param str
   */
  public static setModule(result: ModuleModel[]) {
    localStorage.setItem("admin_module_login", JSON.stringify(result));
  }

  /**
   * 获取用户登录模块信息
   */
  public static getModule() {
    let itemInfo = localStorage.getItem("admin_module_login");
    let staffLoginInfo = JSON.parse(itemInfo);
    return staffLoginInfo as ModuleModel[];
  }
}
