import { combineReducers } from 'redux'
import session from './session'

const rootReducer = combineReducers({
  session: session
})

export default rootReducer
