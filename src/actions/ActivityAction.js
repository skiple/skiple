import axios from 'axios'
import {
  GET_ALL_ACTIVITIES,
  GET_ACTIVITY,
  SELECTED_ACTIVITY,
  CHANGE_PHOTO
} from './types'

export const updateActivityData = ({ prop, value }) => {
  return {
    type: CHANGE_PHOTO,
    payload: { prop, value }
  }
}
export const getAllActivities = () => {
  return (dispatch) => {
    axios.get('/activity')
      .then(res => getAllActivitiesSuccess(dispatch, res))
  }
}

export const getActivity = (id) => {
  return (dispatch) => {
    axios.get(`/activity/${id}`)
      .then(res => getActivitySuccess(dispatch, res))
  }
}

export const selectedActivity = (activity, dates) => {
  return {
    type: SELECTED_ACTIVITY,
    payload: { activity, dates }
  }
}

const getAllActivitiesSuccess = (dispatch, res) => {
  dispatch({
    type: GET_ALL_ACTIVITIES,
    payload: res
  })
}

const getActivitySuccess = (dispatch, res) => {
  dispatch({
    type: GET_ACTIVITY,
    payload: res
  })
}
