import axios from "axios";

axios.defaults.baseURL = "http://rp.rentuff.id/api";

// ACTIVITY
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const SELECTED_ACTIVITY = "SELECTED_ACTIVITY";

// USER
export const SIGN_IN = "SIGN_IN";
export const LOG_OUT = "LOG_OUT";

// TRANSACTION
export const GET_ALL_TRANSACTION = "GET_ALL_TRANSACTION";