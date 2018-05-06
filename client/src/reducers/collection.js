import { POSTING_SHOW_TO_COLLECTION, ADDED_SHOW_TO_COLLECTION, FETCHING_COLLECTION, FETCHED_COLLECTION } from '../actions/collection'

export default function showsReducer (state = {
  shows: [],
  myCollection: [],
  isFetching: false,
  status: []
}, action) {
  switch (action.type) {
    case POSTING_SHOW_TO_COLLECTION:
      return Object.assign({}, state, { isFetching: true, status: 'to watch' })
    case ADDED_SHOW_TO_COLLECTION:
      return Object.assign({}, state, { shows: action.show, isFetching: false })
    case FETCHING_COLLECTION:
      return Object.assign({}, state, { isFetching: true })
    case FETCHED_COLLECTION:
      return Object.assign({}, state, { myCollection: action.collection, isFetching: false })
    default:
      return state
  }
}
