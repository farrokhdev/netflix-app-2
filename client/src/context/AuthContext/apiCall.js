import { axiosInstance } from "config";
import { LoginStart, LoginSuccess, LoginFailed, Logout } from "./AuthAction";

export const loginApi = async (userInfo, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axiosInstance.post("auth/login", userInfo);

    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailed());
  }
};
export const logOutApi = (dispatch) => {
  dispatch(Logout());
};
