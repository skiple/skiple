import { combineReducers } from 'redux'

import ActivityReducers from './reducers_activity'
import UserReducers from './reducers_user'
import TransactionReducers from './reducers_transaction'
import PaymentReducers from './reducers_payment'

const rootReducer = combineReducers({
  activity: ActivityReducers,
  user: UserReducers,
  transaction: TransactionReducers,
  payment: PaymentReducers
})

export default rootReducer
