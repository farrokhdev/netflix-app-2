import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailed, Logout } from "./AuthAction";

export const loginApi = async (userInfo, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post("auth/login", userInfo);

    res.data.isAdmin && dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailed());
  }
};
export const logOutApi = (dispatch) => {
  dispatch(Logout());
};
