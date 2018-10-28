// 登录接口
export function login () {
  return {
    // isOpen: false,
    url: 'http://127.0.0.1:8080/login',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'token': '1234567890'
        // 其他数据
      }
    }
  }
}
