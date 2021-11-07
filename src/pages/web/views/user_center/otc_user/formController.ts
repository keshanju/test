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
  public header: object = {}
  public showConfirmSteps: boolean = false;
  public isNextStep: boolean = false;
  public stepNum: number = 1;
  public uploadLimit: number = 1;
  public dialogImageUrl: string = '';
  public dialogVisible : boolean = false;
  public areaOptions: Array<object> = areaCode;

  public cardFUrl: string = ''
  public cardRUrl: string = ''
  public holdCUrl: string = ''

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
      { required: true, message: "邮箱地址", trigger: "change" },
    ],
    wechatId: [
      { required: true, message: "微信号", trigger: "change" },
    ],
    emergencyContact: [
      { required: true, message: "紧急联系人", trigger: "change" },
    ],
    emergencyContactNumber: [
      { required: true, message: "紧急联系人电话", trigger: "change" },
    ],
    planAssets: [
      { required: true, message: "预投入资产", trigger: "change" },
    ],
    videoIntro: [
      { required: true, message: "申请类别", trigger: "change" },
    ],
    assetPrint: [
      { required: true, message: "申请类别", trigger: "change" },
    ],
    assetIntro: [
      { required: false, message: "个人申明", trigger: "change" },
    ],
  };

  public goNextStep() {
    const fieldsArr = ["citizenship", "idType", "idNumber", "name"];
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
  }

  public confirmSubmit() {
    const fieldsArr = ["cardFront", "cardReverse", "holdCard"];
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
        this.readyUserCertification()
      }
    });
  }

  public async readyUserCertification() {
    const options = {
      ...this.authForm
    }
    const backData = await new UserApi().usercertification(options)
    if (backData.status === 200) {
      this.$message.success('资料提交成功，请等待系统审核!')
      this.stepNum = 3;
      JumpUtil.backUserCenter()
    }
  }

  public onFileChange(res, file, type) {
    if(res.status === 200) {
      switch (type) {
        case 'cardFront':
          this.cardFUrl = URL.createObjectURL(file.raw)
          // this.authForm.cardFront = file.response.data.fid
          this.$message.success('上传身份证正面成功!')
          break;
        case 'cardReverse':
          this.cardRUrl = URL.createObjectURL(file.raw)
          // this.authForm.cardReverse = file.response.data.fid
          this.$message.success('上传身份证反面成功!')
          break;
        case 'holdCard':
          this.holdCUrl = URL.createObjectURL(file.raw)
          // this.authForm.holdCard = file.response.data.fid
          this.$message.success('上传手持身份证成功!')
          break;
      }
    } else {
      this.$message.error('图片上传失败，请重试!')
    }
  }

  public handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  }

  public handleRemove() {

  }

  public goVerify() {
    this.showConfirmSteps = true;
  }
}
