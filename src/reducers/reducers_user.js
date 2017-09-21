import { SIGN_IN, GET_PROFILE, UPDATE_DATA_PROFILE } from 'actions/const'

const INITIAL_STATE = {
  dataUser: '',
  signIn: '',
  first_name: '',
  last_name: '',
  phone: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signIn: action.payload.data }
    case GET_PROFILE:
      return {
        ...state,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        phone: action.payload.user.phone
      }
    case UPDATE_DATA_PROFILE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
