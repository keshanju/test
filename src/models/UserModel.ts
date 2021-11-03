/**
 *用户
 *
 * @export
 * @interface UserModel
 */

 export class UserDetailModle {
    public id: number = 0;
    public userName: string = '';
    public mobile: string = '';
    public email: string = '';
    public realName: string = '';
    public level: string = '';
    public area: string = '';
    public bindMobile: boolean = false;
    public bindEmail: boolean = false;
    public bindGA: boolean = false;
    public bindTradePwd: boolean = false;
    public registerType: number = 1;
    public verifyStatus: number = 0;
    public cardId: string = '';
}
 export class LoginModel {
    public email: string = "";
    public mobile: string = "";
    public refreshToken: string = "";
    public requestId: string = "";
    public token: string = "";
    public uid: string = "";
    public userName: string = "";
}
export interface LoginReqModel {
    userName: string;
    password: string;
}
export interface RegReqModel {
    type: string;
    mobile: string;
    email: string;
    mobileArea?: string;
    pwd: string,
    captcha: string,
    inviteCode?: string
}

export class RegModel {

}

export interface CaptchaReqModel {
    type: string;
    address: string;
    code_type: number;
    mobileArea: string;
}

export class CaptchaModel {

}

export interface verifySmsReqModel {
    address: string;
    captcha: number;
}

export class verifySmsModel {

}

export interface resetPwdReqModel {
    pwd: string;
    requestId: string;
}

export class resetPwdModel {

}
