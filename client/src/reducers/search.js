import { FETCHING_SHOWS, FETCHED_SHOWS } from '../actions/search'

export default function searchReducer (state = {
  shows: [],
  isFetching: false
}, action) {
  switch (action.type) {
    case FETCHING_SHOWS:
      return Object.assign({}, state, { isFetching: true })
    case FETCHED_SHOWS:
      return Object.assign({}, state, { shows: action.shows, isFetching: false })
    default:
      return state
  }
}
