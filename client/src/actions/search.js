import fetch from 'cross-fetch'

export const FETCHING_SHOWS = 'FETCHING_SHOWS'
export const FETCHED_SHOWS = 'FETCHED_SHOWS'

export function searchShows (query) {
  return function (dispatch) {
    dispatch({ type: FETCHING_SHOWS })
    return fetchShows(query).then(res => {
      dispatch({ type: FETCHED_SHOWS, shows: res })
    })
  }
}

const fetchShows = query => (
  fetch(`https://api.trakt.tv/search/show?query=${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': process.env.REACT_APP_TRAKT_CLIENT_ID
    }
  }).then((res) => { return res.json() })
)
