import axios from '../axios'

export const findMenuTree = () => {
  return axios({
    url: '/menu/findMenuTree',
    method: 'get'
  })
}
