import { SIGN_IN } from 'actions/const'

// const INITIAL_STATE = { user: {} }

export default function (state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.payload.data
  }
  return state
}
