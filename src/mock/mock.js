import Mock from 'mockjs'

Mock.mock('http://127.0.0.1:8080/login', {
  data: {
    'token': '1234567890'
  }
})
Mock.mock('http://127.0.0.1:8080/user', {
  data: {
    'name': '@name',
    'email': '@email',
    'age|1-10': 5
  }
})
Mock.mock('http://127.0.0.1:8080/menu', {
  data: {
    'id': '@increment',
    'email': 'menu',
    'order|10-20': 12
  }
})
