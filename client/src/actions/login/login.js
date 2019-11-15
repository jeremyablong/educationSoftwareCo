import { LOGIN_WITH_CODE } from "../types.js";
import axios from "axios";

export const gatherCodes = () => {
  return function(dispatch) {
    return axios.get("/login/request/codes")
      .then((data) => {
      	console.log("DATA :", data)
      	dispatch(data);
    }).catch((err) => {
    	console.log(err);
    });
  };
}
