import * as types from './types'

export default {
  [types.GET_CODE_URL] (state) {
    state.imgCodeUrl = '/api/admin/checkCode?radom' + Math.random()
  }
}
