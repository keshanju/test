import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/common/BaseVue";
import BoxExpress from "@/box.all";
import { PluginApi } from "../../apis/PluginApi";
import { PluginModel } from '@/models/PluginModel';
import my_nav from '../../components/my_nav.vue';

@Component({
    components: {
        my_nav
    }
})
export default class List extends BaseVue {

    public default_show: any = {}

    public mounted() {
        //读取 json
        // 默认显示 组件
    }
}