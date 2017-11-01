import { SIGN_IN, GET_PROFILE, UPDATE_DATA_PROFILE } from 'actions/types'

const INITIAL_STATE = {
  dataUser: '',
  signIn: '',
  firstName: '',
  lastName: '',
  phone: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signIn: action.payload.data }
    case GET_PROFILE:
      return {
        ...state,
        firstName: action.payload.user.first_name,
        lastName: action.payload.user.last_name,
        phone: action.payload.user.phone
      }
    case UPDATE_DATA_PROFILE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
