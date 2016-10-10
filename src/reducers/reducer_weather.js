import * as types from '../actions/action_types';

export default function(state = [], action) {
  switch (action.type) {
    case types.FETCH_WEATHER:
        //return state.concat([action.payload.data]); // concat returns a new instance
        return [action.payload.data, ...state];
  }
  return state;
}
