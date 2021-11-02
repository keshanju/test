import { Component, Vue, Prop } from "vue-property-decorator"
import BaseVue from '../../commons/BaseAdminVue'
import { MarketsApi } from '../../apis/MarketApi'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
@Component({
  components: {
    Header,
    Footer
  },
  filters: {
    
  }
})

export default class Layout extends BaseVue {
  
}
