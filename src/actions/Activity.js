import axios from "axios";
import { 
	GET_ALL_ACTIVITIES,
	GET_ACTIVITY
} from "./const";

export async function getAllActivities() {
	const request = await axios.get("/activity");
	
	return {
		type: GET_ALL_ACTIVITIES,
		payload: request
	}
}

export async function getActivity(id){
	const request = await axios.get(`/activity/${id}`);

	return{
		type: GET_ACTIVITY,
		payload: request
	}
}
