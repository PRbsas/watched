import { combineReducers } from 'redux'
import session from './session'
import search from './search'
import show from './shows'
import collection from './collection'

const rootReducer = combineReducers({
  session,
  search,
  show,
  collection
})

export default rootReducer
