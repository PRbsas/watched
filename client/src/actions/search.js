import fetch from 'cross-fetch'

export function searchShows (query) {
  return function (dispatch) {
    return fetchShows(query).then(res => {
      console.log(res)
    })
  }
}

const fetchShows = query => (
  fetch(`https://api.trakt.tv/search/show?query=${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'trakt-api-version': 2,
      'trakt-api-key': process.env.TRAKT_CLIENT_ID
    }
  }).then((res) => { return res.json() })
)
