import axios from "axios";
import { GET_ALL_TRANSACTION } from "./const"

export async function getAllTransaction() {
	let token = localStorage.getItem("token");
	const request = await axios.get("/transaction", {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});

	return {
		type: GET_ALL_TRANSACTION,
		payload: request
	}
}