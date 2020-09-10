import { FETCH_HISTORY, FETCH_PAYLOAD, SET_LINK } from "./Types";
import axiosGet from "./../utils/AxiosHelper";

export const setLink = (payload) => {
  return {
    type: SET_LINK,
    payload: payload,
  };
};

export const fetchHistory = () => async (dispatch) => {
  const response = await axiosGet("/history");

  dispatch({ type: FETCH_HISTORY, payload: response.data });
};

export const fetchPayload = () => async (dispatch) => {
  const response = await axiosGet("/payloads");

  dispatch({ type: FETCH_PAYLOAD, payload: response.data });
};
