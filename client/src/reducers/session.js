import { LOG_IN_SUCCESS } from '../actions/users/sessions'

export default function sessionReducer (state = !!window.localStorage.token, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return !!window.localStorage.token
    default:
      return state
  }
}
