import { Component, Vue, Prop,Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Layout extends Vue {
  public options: any = {};
  /**
   *
   */
  @Prop({ default: "测试管理" })
  public title!: string;

  @Prop({ default: "列表" })
  public op!: string;

  mounted() {
    this.options.title = this.title;
    this.options.op = this.op;
    // console.log(this.$route.path);
    
  }

  public onBackHomeHandler(sender: any) {
    this.$router.push({ path: "/admin/index" });
  }
}
