export const GetListStart = () => ({
  type: "List_start",
});
export const GetListSuccess = (lists) => ({
  type: "List_success",
  payload: lists,
});
export const GetListFailed = () => ({
  type: "List_failed",
});
// delete actions

export const DeleteListStart = () => ({
  type: "delete_List_start",
});
export const DeleteListSuccess = (id) => ({
  type: "delete_List_success",
  payload: id,
});
export const DeleteListFailed = () => ({
  type: "delete_List_failed",
});
// delete actions

export const CreateListStart = () => ({
  type: "create_List_start",
});
export const CreateListSuccess = (list) => ({
  type: "create_List_success",
  payload: list,
});
export const CreateListFailed = () => ({
  type: "create_List_failed",
});
// update actions
export const UpdateListStart = () => ({
  type: "update_List_start",
});
export const UpdateListSuccess = (id) => ({
  type: "update_List_success",
  payload: id,
});
export const UpdateListFailed = () => ({
  type: "update_List_failed",
});
