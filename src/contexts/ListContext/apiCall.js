import axios from "axios";
import {
  GetListStart,
  GetListSuccess,
  GetListFailed,
  DeleteListStart,
  DeleteListSuccess,
  DeleteListFailed,
  CreateListStart,
  CreateListSuccess,
  CreateListFailed,
} from "./ListAction";

export const ListApi = async (dispatch) => {
  dispatch(GetListStart());
  try {
    const res = await axios.get("list/", {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(GetListSuccess(res.data));
  } catch (err) {
    dispatch(GetListFailed());
  }
};

// delete list
export const DeleteListApi = async (id, dispatch) => {
  dispatch(DeleteListStart());
  try {
    await axios.delete("list/" + id, {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(DeleteListSuccess(id));
  } catch (err) {
    dispatch(DeleteListFailed());
  }
};
// create list
export const CreateListApi = async (list, dispatch) => {
  dispatch(CreateListStart());
  try {
    const res = await axios.post("list", list, {
      headers: {
        token: "barear " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(CreateListSuccess(res.data));
  } catch (err) {
    dispatch(CreateListFailed());
  }
};