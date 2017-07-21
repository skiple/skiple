import axios from "axios";
import { GET_ALL_ACTIVITIES, SELECTED_ACTIVITY } from "./const";

export async function getAllActivities() {
	const request = await axios.get("/activity");
	
	return {
		type: GET_ALL_ACTIVITIES,
		payload: request
	}
}

export async function selectedActivity(activity){
	const request = await axios.get(`/activity/${activity}`);

	return{
		type: SELECTED_ACTIVITY,
		payload: request
	}
}