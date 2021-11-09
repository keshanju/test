import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import areaCode from "../../../assets/js/area_code";
import LocalStorageUtil from "@/utils/LocalStorageUtil";
import CheckUtil from "@/utils/CheckUtils";
import { UserApi } from "@/pages/web/apis/UserApi";
import { JumpUtil } from "@/utils/JumpUtil";

@Component({
  components: {},
})
export default class List extends BaseVue {
  public token: string = ''
  public checked:boolean = false
  public header: object = {}
  public showConfirmSteps: boolean = false;
  public isNextStep: boolean = false;
  public stepNum: number = 1;
  public uploadLimit: number = 1;
  public dialogImageUrl: string = '';
  public dialogVisible : boolean = false;
  public areaOptions: Array<object> = areaCode;

  // 认证视频上传参数
  public showVideoPath: string = ''
  public videoFlag: boolean = false //是否显示进度条
  public videoUploadPercent: number = 0 //进度条的进度

  public authForm = {
    realName: "",
    mobile: "",
    mobileArea: "",
    email: "",
    wechatId: "",
    emergencyContact: "",
    emergencyContactNumber: "",
    planAssets: '3000',
    videoIntro: "",
    assetPrint: "1",
    assetIntro: "",
  };

  async mounted() {
    this.token = LocalStorageUtil.getLoginInfo().token
    this.header = {
      Authorization: this.token
    }
  }

  public authRules = {
    realName: [{ required: true, message: "申请人姓名", trigger: "blur" }],
    mobile: [{ required: true, message: "申请人电话", trigger: "blur" }],
    mobileArea: [{ required: true, message: "所属地区", trigger: "change" }],
    email: [
      { required: true, message: "邮箱地址", trigger: "blur" },
    ],
    wechatId: [
      { required: true, message: "微信号", trigger: "blur" },
    ],
    emergencyContact: [
      { required: true, message: "紧急联系人", trigger: "blur" },
    ],
    emergencyContactNumber: [
      { required: true, message: "紧急联系人电话", trigger: "blur" },
    ],
    planAssets: [
      { required: true, message: "预投入资产", trigger: "blur" },
    ],
    videoIntro: [
      { required: true, message: "认证视频", trigger: "change" },
    ],
    assetPrint: [
      { required: true, message: "申请类别", trigger: "change" },
    ],
    assetIntro: [
      { required: false, message: "个人申明", trigger: "blur" },
    ],
  };

  public goNextStep() {
    const fieldsArr = ["realName", "mobile", "mobileArea", "email", "wechatId", "emergencyContact", "emergencyContactNumber", "planAssets", "assetPrint", "assetIntro"];
    Promise.all(
      fieldsArr.map((item) => {
        return new Promise((resolve, reject) => {
          (this.$refs["authForm"] as any).validateField(item, (result) => {
            resolve(result);
          });
        });
      })
    ).then((result) => {
      // result返回各个字段的验证信息，如果为空字符串则认为验证通过
      let msg = result.find((res) => {
        return res != "";
      });
      if (!msg) {
        this.stepNum = 2;
      }
    });
    // this.stepNum = 2;
  }

  public confirmSubmit() {
    const fieldsArr = ["videoIntro"];
    Promise.all(
      fieldsArr.map((item) => {
        return new Promise((resolve, reject) => {
          (this.$refs["authForm"] as any).validateField(item, (result) => {
            resolve(result);
          });
        });
      })
    ).then((result) => {
      // result返回各个字段的验证信息，如果为空字符串则认为验证通过
      let msg = result.find((res) => {
        return res != "";
      });
      if (!msg) {
        if (!this.checked) {
          this.$message.error('请先勾选质押保证金条款')
          return false
        }
        this.readyToOtcUserApply()
      }
    });
  }

  public async readyToOtcUserApply() {
    const options = {
      ...this.authForm
    }
    const backData = await new UserApi().otcuserapply(options)
    if (backData.status === 200) {
      this.$message.success('资料提交成功，请等待系统审核!')
      this.stepNum = 3;
      JumpUtil.backUserCenter()
    }
  }

  beforeUploadVideo(file) {
    const fileSize = file.size / 1024 / 1024 < 5;
    const arr = ['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov']
    if (arr.indexOf(file.type) == -1) {
      this.$message.error("请上传正确的视频格式");
      return false;
    }
    if (!fileSize) {
      this.$message.error("视频大小不能超过50MB");
      return false;
    }
  }

  public onFileChange(res, file) {
    this.videoFlag = false;
    this.videoUploadPercent = 0;
    if(res.status === 200) {
      this.showVideoPath = URL.createObjectURL(file.raw)
      this.authForm.videoIntro = file.response.data.fid
    } else {
      this.$message.error('视频上传失败，请重试!')
    }
  }
  
  public uploadVideoProcess(event, file, fileList) {
    debugger
    this.videoFlag = true;
    this.videoUploadPercent = file.percentage.toFixed(0) * 1;
  }

  public goVerify() {
    this.showConfirmSteps = true;
  }
}
