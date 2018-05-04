import { FETCHING_SHOWS, FETCHED_SHOWS } from '../actions/search'

export default function searchReducer (state = {
  shows: [],
  fetching: false
}, action) {
  switch (action.type) {
    case FETCHING_SHOWS:
      return Object.assign({}, state, { fetching: true })
    case FETCHED_SHOWS:
      return Object.assign({}, state, { shows: action.shows, fetching: false })
    default:
      return state
  }
}
