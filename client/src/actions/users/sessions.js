import fetch from 'cross-fetch'
import base from '../../utils/url'

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'

export function loginUser (user) {
  return function (dispatch) {
    return loginReq(user).then(res => {
      if (res.token !== undefined) {
        window.localStorage.setItem('token', res.token)
        dispatch({ type: LOG_IN_SUCCESS, session: true })
      }
    })
  }
}

const loginReq = user => (
  fetch(`${base}/api/v1/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((res) => { return res.json() })
)
