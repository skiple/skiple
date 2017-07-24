import {
  GET_ALL_ACTIVITIES,
  GET_ACTIVITY
} from 'actions/const'

const INITIAL_STATE = { all: [], details: {} }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_ACTIVITIES:
      return { ...state, all: action.payload.data }
    case GET_ACTIVITY:
      return { ...state, details: action.payload.data }
    default:
      return state
  }
}
