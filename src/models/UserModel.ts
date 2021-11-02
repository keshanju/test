/**
 *用户
 *
 * @export
 * @interface UserModel
 */

/**
 * 登录成功返回参数
 */
 export class LoginModel {
    public email: string = "";
    public mobile: string = "";
    public refreshToken: string = "";
    public requestId: string = "";
    public token: string = "";
    public uid: string = "";
    public userName: string = "";
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

export interface LoginReqModel {
    userName: string;
    password: string;
}

export class LoginModle {

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
