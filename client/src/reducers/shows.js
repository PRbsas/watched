import { FETCHING_SHOW, FETCHED_SHOW } from '../actions/shows'

export default function showsReducer (state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case FETCHING_SHOW:
      return Object.assign({}, state, { isFetching: true })
    case FETCHED_SHOW:
      return Object.assign({}, state, { show: action.show, isFetching: false })
    default:
      return state
  }
}
