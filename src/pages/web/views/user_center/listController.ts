import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/common/BaseVue";
import BoxExpress from "@/box.all";
import { AdApi } from "../../apis/AdApi";
import { AdModel } from "@/models/AdModel";
import my_nav from '../../components/my_nav.vue';

@Component({
  components: {
    my_nav
  }
})
export default class List extends BaseVue {
  
}