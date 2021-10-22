import axios from "axios";
import {
  GetUserStart,
  GetUserSuccess,
  GetUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
  CreateUserStart,
  CreateUserSuccess,
  CreateUserFailed,
} from "./UserAction";

export const UserApi = async (dispatch) => {
  dispatch(GetUserStart());
  try {
    const res = await axios.get("/users/" + "?new=true", {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(GetUserSuccess(res.data));
  } catch (err) {
    dispatch(GetUserFailed());
  }
};
// delete user
export const DeleteUserApi = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailed());
  }
};
// create user
export const CreateUserApi = async (user, dispatch) => {
  dispatch(CreateUserStart());
  try {
    const res = await axios.post("auth/register/", user);
    dispatch(CreateUserSuccess(res.data));
  } catch (err) {
    dispatch(CreateUserFailed());
  }
};
