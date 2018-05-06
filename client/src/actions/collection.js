import fetch from 'cross-fetch'

export const POSTING_SHOW_TO_COLLECTION = 'POSTING_SHOW_TO_COLLECTION'
export const ADDED_SHOW_TO_COLLECTION = 'ADDED_SHOW_TO_COLLECTION'

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
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then((res) => { console.log(res.json()) })
)