import { combineReducers } from "redux";

import HistoryReducer from "./HistoryReducer";
import payloadReducer from "./PayloadReducer";
import LinkReducer from "./LinkReducer";

export default combineReducers({
  history: HistoryReducer,
  payload: payloadReducer,
  link: LinkReducer,
});
