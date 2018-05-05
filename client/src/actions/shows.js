import fetch from 'cross-fetch'

export const FETCHING_SHOW = 'FETCHING_SHOW'
export const FETCHED_SHOW = 'FETCHED_SHOW'

export const searchShow = (slug) => {
  return function (dispatch) {
    dispatch({ type: FETCHING_SHOW })
    return fetchShow(slug).then(res => {
      dispatch({ type: FETCHED_SHOW, show: res })
    })
  }
}

const fetchShow = slug => (
  fetch(`https://api.trakt.tv/shows/${slug}?extended=full`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': process.env.REACT_APP_TRAKT_CLIENT_ID
    }
  }).then((res) => { return res.json() })
)
