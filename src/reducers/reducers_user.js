import { SIGN_IN, GET_PROFILE } from 'actions/const'

const INITIAL_STATE = {
  dataUser: '',
  signIn: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signIn: action.payload.data }
    case GET_PROFILE:
      return { ...state, dataUser: action.payload.data }
    default:
      return state
  }
}
