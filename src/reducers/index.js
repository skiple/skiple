import { combineReducers } from "redux";

import ActivityReducers from "./reducers_activity";
import UserReducers from "./reducers_user";
import TransactionReducers from "./reducers_transaction";

const rootReducer = combineReducers({
	activity: ActivityReducers,
	user: UserReducers,
	transaction: TransactionReducers,
});

export default rootReducer;
