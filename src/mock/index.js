import Mock from 'mockjs'
import loginAPI from './login'
import inAPI from './in'

function renderResult(fun) {
  return params => {
    return {
      code: 200,
      msg: 'success',
      data: fun(params)
    }
  }
}

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/user\/login/, 'post', renderResult(loginAPI.loginByUsername))
Mock.mock(/\/user\/logout/, 'post', renderResult(loginAPI.logout))
Mock.mock(/\/user\/info\.*/, 'get', renderResult(loginAPI.getUserInfo))
Mock.mock(/\/point\/list/, 'get', renderResult(inAPI.controlPointList))

export default Mock
