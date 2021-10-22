export const GetUserStart = () => ({
  type: "User_start",
});
export const GetUserSuccess = (Users) => ({
  type: "User_success",
  payload: Users,
});
export const GetUserFailed = () => ({
  type: "User_failed",
});
// delete action
export const deleteUserStart = () => ({
  type: "delete_User_start",
});
export const deleteUserSuccess = (id) => ({
  type: "delete_User_success",
  payload: id,
});
export const deleteUserFailed = () => ({
  type: "delete_User_failed",
});
// create action
export const CreateUserStart = () => ({
  type: "create_User_start",
});
export const CreateUserSuccess = (user) => ({
  type: "create_User_success",
  payload: user,
});
export const CreateUserFailed = () => ({
  type: "create_User_failed",
});
// update action
export const updateUserStart = () => ({
  type: "update_User_start",
});
export const updateUserSuccess = (id) => ({
  type: "update_User_success",
  payload: id,
});
export const updateUserFailed = () => ({
  type: "update_User_failed",
});
