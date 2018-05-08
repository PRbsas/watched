import fetch from 'cross-fetch'
import base from '../../utils/url'

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

export const signUpUser = (user) => {
  return function (dispatch) {
    return logInRequest(user).then(res => {
      if (res.token !== undefined) {
        window.localStorage.setItem('token', res.token)
        dispatch({ type: SIGN_UP_SUCCESS, session: true })
      }
    })
  }
}

const logInRequest = user => (
  fetch(`${base}/signup`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((res) => { return res.json() })
)