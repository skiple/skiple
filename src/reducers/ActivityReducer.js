import {
  GET_ALL_ACTIVITIES,
  GET_ACTIVITY,
  SELECTED_ACTIVITY,
  CHANGE_PHOTO
} from 'actions/types'

const INITIAL_STATE = {
  all: [],
  details: {},
  selected: {},
  dates: {},
  quantity: '',
  mainPhoto: '',
  secondPhoto: '',
  thirdPhoto: '',
  fourthPhoto: '',
  date: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_ACTIVITIES:
      return { ...state, all: action.payload.data }
    case GET_ACTIVITY:
      return { ...state, details: action.payload.data }
    case SELECTED_ACTIVITY:
      return { ...state, selected: action.payload.activity, dates: action.payload.dates }
    case CHANGE_PHOTO:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
