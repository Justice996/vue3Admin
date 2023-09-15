// 用户相关的参数
import request from '@/utils/request.ts';
import type {loginForm,loginResponseDate,userResponseData} from './type'

console.log(request);


enum API{
    LOGIN_URL="/user/login",
    USERINFO_URL="/user/info"
}

//登录方法

export const reqLogin = (data:loginForm) =>request.post<any,loginResponseDate>(API.LOGIN_URL,data);

//获取客户信息方法

export const reqUserInfo= (data:any) =>request.get<any,userResponseData>(API.USERINFO_URL);