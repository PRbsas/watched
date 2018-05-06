import fetch from 'cross-fetch'

export const FETCHING_SHOW_INFO = 'FETCHING_SHOW_INFO'
export const FETCHED_SHOW_INFO = 'FETCHED_SHOW_INFO'

export const fetchShowInfo = (slug) => {
  return function (dispatch) {
    dispatch({ type: FETCHING_SHOW_INFO })
    return fetchShow(slug).then(res => {
      dispatch({ type: FETCHED_SHOW_INFO, show: res })
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
