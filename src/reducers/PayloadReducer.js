import { FETCH_PAYLOAD } from "../actions/Types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PAYLOAD:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
