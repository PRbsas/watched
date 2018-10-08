import fetch from 'cross-fetch'

export const POSTING_SHOW_TO_COLLECTION = 'POSTING_SHOW_TO_COLLECTION'
export const ADDED_SHOW_TO_COLLECTION = 'ADDED_SHOW_TO_COLLECTION'
export const FETCHING_COLLECTION = 'FETCHING_COLLECTION'
export const FETCHED_COLLECTION = 'FETCHED_COLLECTION'
export const UPDATE_STATUS = 'UPDATE_STATUS'

const token = localStorage.getItem('token')

export const addShowToCollection = (show) => {
  return function (dispatch) {
    dispatch({ type: POSTING_SHOW_TO_COLLECTION })
    return postShowToCollection(show).then(res => {
      dispatch({ type: ADDED_SHOW_TO_COLLECTION, show: res })
    })
  }
}

const postShowToCollection = show => (
  fetch('http://localhost:3001/api/v1/shows', {
    method: 'POST',
    body: JSON.stringify(show),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => { return res.json() })
)

export const fetchCollection = () => {
  return function (dispatch) {
    dispatch({ type: FETCHING_COLLECTION })
    return getCollection().then(res => {
      dispatch({ type: FETCHED_COLLECTION, collection: res })
    })
  }
}

const getCollection = () => (
  fetch('http://localhost:3001/api/v1/collections', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => { return res.json() })
)

export const updateStatus = id => {
  return { type: UPDATE_STATUS, id }
}