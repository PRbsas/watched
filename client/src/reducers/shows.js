import { FETCHING_SHOW_INFO, FETCHED_SHOW_INFO } from '../actions/shows'

export default function showsReducer (state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case FETCHING_SHOW_INFO:
      return Object.assign({}, state, { isFetching: true })
    case FETCHED_SHOW_INFO:
      return Object.assign({}, state, { showInfo: action.show, isFetching: false })
    default:
      return state
  }
}
