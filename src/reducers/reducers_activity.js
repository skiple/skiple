import {
  GET_ALL_ACTIVITIES,
  GET_ACTIVITY,
  SELECTED_ACTIVITY
} from 'actions/const'

const INITIAL_STATE = { all: [], details: {}, selected: {}, dates: {}, quantity: '' }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_ACTIVITIES:
      return { ...state, all: action.payload.data }
    case GET_ACTIVITY:
      return { ...state, details: action.payload.data }
    case SELECTED_ACTIVITY:
      return { ...state, selected: action.payload.activity, dates: action.payload.dates, quantity: action.payload.quantity }
    default:
      return state
  }
}
