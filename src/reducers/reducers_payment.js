import { GET_PAYMENT_METHOD } from 'actions/const'

const INITIAL_STATE = { all: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PAYMENT_METHOD:
      return { ...state, all: action.payload.data }
  }
  return state
}
