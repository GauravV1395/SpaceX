import { SET_LINK } from "./../actions/Types";

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case SET_LINK:
      return {
        ...state,
        link: action.payload,
      };
    default:
      return state;
  }
};
