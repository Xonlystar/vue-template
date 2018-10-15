import { Post } from 'utils/axios'

export default {
  /**
   * 登录接口
   * @param commit
   * @param data
   */
  login: ({ commit }, data) => (
    Post('/admin/login', data).then(res => {
      return res
    })
  ),
  /**
   * 退出登录接口
   * @param commit
   * @param data
   */
  logout: ({ commit }, data) => (
    Post('/admin/logout', data).then(res => {
      return res
    })
  )
}
