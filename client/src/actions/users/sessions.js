import fetch from 'cross-fetch'
import base from '../../utils/url'

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_OUT = 'LOG_OUT'

export const loginUser = (user) => {
  return function (dispatch) {
    return logInRequest(user).then(res => {
      if (res.token !== undefined) {
        window.localStorage.setItem('token', res.token)
        dispatch({ type: LOG_IN_SUCCESS, session: true })
      }
    })
  }
}

const logInRequest = user => (
  fetch(`${base}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((res) => { return res.json() })
)

export const logOutUser = () => {
  return function (dispatch) {
    window.localStorage.removeItem('token')
    dispatch({ type: LOG_OUT, session: false })
  }
}
