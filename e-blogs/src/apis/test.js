import request from '@/utils/http'

// 加入购物车
export const LoginRegisterAPI = ({email, password,identity_code}) => {
  return request({
    url:'/user/login-register',
    method: 'POST',
    data: {
        email,
        password,
        identity_code
    }
  })
}