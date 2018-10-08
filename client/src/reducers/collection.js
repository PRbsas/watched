import { POSTING_SHOW_TO_COLLECTION, ADDED_SHOW_TO_COLLECTION, FETCHING_COLLECTION, FETCHED_COLLECTION, UPDATE_STATUS } from '../actions/collection'

export default function showsReducer (state = {
  myCollection: [],
  isFetching: false,
  watch: 'to watch'
}, action) {
  switch (action.type) {
    case POSTING_SHOW_TO_COLLECTION:
      return Object.assign({}, state, { isFetching: true, watch: 'to watch' })
    case ADDED_SHOW_TO_COLLECTION:
      return Object.assign({}, state, { myCollection: [ ...state.myCollection, action.show ] })
    case FETCHING_COLLECTION:
      return Object.assign({}, state, { isFetching: true })
    case FETCHED_COLLECTION:
      return Object.assign({}, state, { myCollection: action.collection, isFetching: false })
      case UPDATE_STATUS:
      let index = state.myCollection.findIndex(show => show.id === action.id)
     return Object.assign({}, state, { myCollection:
       [ ...state.myCollection.slice(0, index),
         Object.assign({}, state.myCollection[index], { watch: 'watched' }),
         ...state.myCollection.slice(index + 1)
       ]
     })
    default:
      return state
  }
}
