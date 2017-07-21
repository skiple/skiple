import { GET_ALL_ACTIVITIES, SELECTED_ACTIVITY } from "actions/const";

export default function (state = {}, action) {
	switch (action.type) {
		case GET_ALL_ACTIVITIES:
			return action.payload;
		case SELECTED_ACTIVITY:
			return action.payload
	}
	return state;
}