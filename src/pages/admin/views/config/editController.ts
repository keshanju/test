/*
 * @Description: 后台基本配置
 * @Author: zhanghongwei
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 16:54:05
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import { ConfigApi } from "@/pages/admin/apis/ConfigApi";
import { ConfigModel } from "../../../../models/ConfigModel";
import my_nav from '../../components/my_nav.vue';

/**
 * 后台基本配置
 */
@Component({
  components: {
    my_nav
  }
})
export default class User extends BaseVue {
  private form: ConfigModel = {};
  private title = "网站配置";
  private config_api = new ConfigApi();
  private loading: boolean = false;

  /**
   * 组件初始化完毕
   */
  created() {
    this.config_api = new ConfigApi();
  }

  /**
   * 初始化
   */
  async mounted() {
    this.loading=true;
    await this.getModel();
    this.loading = false;
  }

  /**
   * 获取
   */
  async getModel() {
    let d = await this.config_api.getModel(0);
    this.form = d.data;
  }

  /**
   * 提交
   */
  private async onSubmit() {
    let d = await this.config_api.setUpdate(this.form.id, this.form);
    if (d.code == 0) {
      this.$message("修改成功!");
      await this.getModel();
    } else {
      this.$message.error(`修改失败! ${d.code} ${d.msg}`);
    }
  }
}