/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 17:00:44
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import { ProductConfigApi } from '@/pages/admin/apis/ProductApi';
import { ProductConfigModel } from '@/models/ProductModel';
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';

@Component({
  components: {
    my_nav
  }
})
export default class Home extends BaseVue {

  private form: ProductConfigModel = {};
  private title = "产品配置";
  private _ProductConfigApi = new ProductConfigApi();
  private loading: boolean = false;
  created() {
    this._ProductConfigApi = new ProductConfigApi();
  }

  public async mounted() {
    this.loading=true;
    await this.getModel();
    this.loading=false;
  }

  async getModel() {
    let d = await this._ProductConfigApi.getModel(0);
    this.form = d.data;
  }

  private async onSubmit() {
    let d = await this._ProductConfigApi.setUpdate(this.form.id, this.form);
    if (d.code == 0) {
      this.$message("修改成功!");
      await this.getModel();
    } else {
      this.$message.error("修改失败!");
    }
  }

}