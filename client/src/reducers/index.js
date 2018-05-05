import { combineReducers } from 'redux'
import session from './session'
import search from './search'
import show from './shows'

const rootReducer = combineReducers({
  session,
  search,
  show
})

export default rootReducer
