import { LOG_IN_SUCCESS, LOG_OUT } from '../actions/users/sessions'
import { SIGN_UP_SUCCESS } from '../actions/users/users'

export default function sessionReducer (state = !!window.localStorage.token, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return !!window.localStorage.token
    case SIGN_UP_SUCCESS:
      return !!window.localStorage.token
    case LOG_OUT:
      return !!window.localStorage.token
    default:
      return state
  }
}
