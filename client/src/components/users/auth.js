import base from '../../utils/url'

export const loginUser = (credentials) => (
  fetch(`${base}/api/v1/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((res) => res.json())
)

export const signUpUser = (credentials) => (
  fetch(`${base}/api/v1/signup`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((res) => res.json())
)
