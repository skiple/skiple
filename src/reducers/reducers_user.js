import { SIGN_IN } from 'actions/const'

const INITIAL_STATE = { user: {}, signup: {} }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, user: action.payload }
  }
  return state
}
