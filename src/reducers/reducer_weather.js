import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // never mutate state.  Return new instance of state
    return [ action.payload.data, ...state ]
  }
  return state
}
