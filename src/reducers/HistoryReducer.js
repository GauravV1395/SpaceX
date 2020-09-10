import { FETCH_HISTORY } from "../actions/Types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return { ...state, history: action.payload };
    default:
      return state;
  }
};
