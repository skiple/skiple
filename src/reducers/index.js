import { combineReducers } from 'redux'

import ActivityReducers from './ActivityReducer'
import UserReducers from './UserReducer'
import TransactionReducers from './TransactionReducer'

const rootReducer = combineReducers({
  activity: ActivityReducers,
  user: UserReducers,
  transaction: TransactionReducers
})

export default rootReducer
