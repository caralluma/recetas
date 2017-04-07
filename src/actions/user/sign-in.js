import API from '../../middleware/api'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()
const users = api.service('users')

export default (user) => {
  return(dispatch) => {
    api.authenticate(user)
    .then((result) => {
      console.log('user signed in')
      dispatch({
        type: USER_SIGNED_IN,
        payload: result.data
      })
    })
  }
}
