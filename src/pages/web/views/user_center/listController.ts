import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import my_nav from '../../components/my_nav.vue';

@Component({
  components: {
    my_nav
  }
})
export default class List extends BaseVue {
  
}