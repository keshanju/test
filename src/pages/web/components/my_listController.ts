import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";

@Component({
    components: {
        
    }
})
export default class home extends BaseVue {
    public default_show: any = {}
    public mounted() {
        //读取 json
        // 默认显示 组件
    }
}