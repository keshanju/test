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
    public login_info: UserToken = new UserToken();
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

export interface LoginReqModel {
    userName: string;
    password: string;
}

export interface CaptchaReqModel {
    type: string;
    address: string;
    code_type: number;
    mobileArea: string;
}

export class UserToken {
    public email: string = "";
    public mobile: string = "";
    public refreshToken: string = "";
    public requestId: string = "";
    public token: string = "";
    public uid: string = "";
    public userName: string = "";
}