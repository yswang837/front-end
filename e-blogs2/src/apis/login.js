import httpInstance from '@/utils/http'

// 通过邮件获取验证码
export const getIdentityCodeByEmailAPI = (email) => {
    return httpInstance({
        url:'/user/identify-code',
        params: {
            email
        }
    })
}

// 用账号密码的方式支持用户登录注册
// 已注册用户：直接登录，todo(返回json web token)
// 未注册用户：直接注册并登录，todo(返回json web token)
export const loginOrRegisterByPwdAPI = (email, password) => {
    return httpInstance({
        url:'/user/login-register',
        method: 'POST',
        data: { email, password }
    })
}

// 用验证码的方式支持用户登录注册
// 已注册用户：直接登录，todo(返回json web token)
// 未注册用户：直接注册并登录，todo(返回json web token)
export const loginOrRegisterByCodeAPI = (email, identity_code) => {
    return httpInstance({
        url:'/user/login-register',
        method: 'POST',
        data: { email, identity_code }
    })
}