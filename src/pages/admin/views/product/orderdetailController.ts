import { Component } from "vue-property-decorator";
import { ProductModel } from "@/models/ProductModel";
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';
import BaseVue from '../../commons/BaseAdminVue';
import { ProductOrderApi } from '@/apis/ProductApi';

@Component({
    components: {
        my_nav,
    }
})
export default class Detail extends BaseVue {
    public loading = false;
    public orderid='';
    tableData = [];
    async mounted() {
        this.orderid=this.$route.params.id;
        this.loading=true;
        await this.getOrderDetail();
        this.loading=false;
    }
    /**
     * 获取订单详情
     */
    public async getOrderDetail() {
      let d= await new ProductOrderApi().getModel(Number(this.orderid));
      this.tableData=[d.data];
    }


}