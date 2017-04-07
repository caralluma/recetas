import API from '../../middleware/api'
export const SIGN_UP = 'SIGN_UP'

const api = new API()
const users = api.service('users')

export default (user) => {
  return() => {
    users.create(user)
    .then((result) => {
      console.log('user created')
    })
  }
}
