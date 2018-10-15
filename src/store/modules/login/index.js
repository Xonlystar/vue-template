import actions from './actions'
import mutations from './mutations'

export default {
  state: {
    imgCodeUrl: '/api/admin/checkCode?radom' + Math.random()
  },
  actions,
  mutations
}
