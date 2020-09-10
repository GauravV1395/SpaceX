import axios from "axios";
import constants from "./Constants";

const axiosGet = (url) => {
  return axios.get(`${constants.baseUrl}${url}`);
};

export default axiosGet;
