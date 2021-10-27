import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Layout extends Vue {
  imagelist = [
    {
      url:
        "http://img.hb.aicdn.com/723f8754f412debce188626d09cc0a1b2be6b7a6751a3-ICEp1E_fw658",
      name: "lemon"
    },
    {
      url:
        "http://img.hb.aicdn.com/38ab9e558bcba041be979f03bfd31bd67bf1e6f35815a-8PD8Eo_fw658",
      name: "lemon2"
    },
    {
      url:
        "http://img.hb.aicdn.com/0cd0dcc93f5b918e191dd84791101435136c7f9811e31-LRzYAQ_fw658",
      name: "lemon3"
    }
  ];

  isEnlargeImage = false; //放大图片
  enlargeImage = ""; //放大图片地址

  params = {
    action: "http://jsonplaceholder.typicode.com/posts/",
    data: {}
  };
  mounted() {}

  handleFileEnlarge(_url) {
    //放大图片
    console.log(_url);
    if (_url) {
      this.enlargeImage = _url;
      this.isEnlargeImage = !this.isEnlargeImage;
    }
  }
  handleFileName(file, i) {
    //修改名字
    console.log(file, i);
    let that = this;
    this.$prompt("请输入新文件名：", "提示：", {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    })
      .then((value:any) => {
        console.log(value);
        if (!value) {
          return false;
        }
        //可添加ajax
        this.$message.success("操作成功");
        that.imagelist[i].name = value;
      })
      .catch(() => {});
  }
  handleFileRemove(file, i) {
    //删除图片
    console.log(file, i);
    if (!file.url) {
      return false;
    }
    let that = this;
    this.$confirm("是否删除此附件？", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        //可添加ajax
        this.$message.success("删除成功");
        this.$message({
          type: "success",
          message: "删除成功",
          onClose: () => {
            that.imagelist.splice(i, 1);
          }
        });
      })
      .catch(meg => console.log(meg));
  }
  uploadOnProgress(e, file) {
    //开始上传
    console.log(e.percent, file);
  }
  uploadOnChange(file) {
    console.log("——————————change——————————");
    // console.log(file)
    if (file.status == "ready") {
      console.log("ready");
    } else if (file.status == "fail") {
      this.$message.error("图片上传出错，请刷新重试！");
    }
  }
  uploadOnSuccess(e, file) {
    //上传附件
    console.log("——————————success——————————");
    this.$message.success("上传成功");
  }
  uploadOnError(e, file) {
    console.log("——————————error——————————");
    console.log(e);
  }
}
