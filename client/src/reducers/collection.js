import { POSTING_SHOW_TO_COLLECTION, ADDED_SHOW_TO_COLLECTION } from '../actions/collection'

export default function showsReducer (state = {
  isFetching: false,
  status: []
}, action) {
  switch (action.type) {
    case POSTING_SHOW_TO_COLLECTION:
      return Object.assign({}, state, { isFetching: true, status: 'to watch' })
    case ADDED_SHOW_TO_COLLECTION:
      return Object.assign({}, state, { shows: action.show, isFetching: false })
    default:
      return state
  }
}
