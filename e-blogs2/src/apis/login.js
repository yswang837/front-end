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