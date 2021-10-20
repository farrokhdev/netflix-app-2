export const LoginStart = () => ({
  type: "Login_start",
});
export const LoginSuccess = (user) => ({
  type: "Login_success",
  payload: user,
});
export const LoginFailed = () => ({
  type: "Login_failed",
});

// Logout action
export const Logout = () => ({
  type: "LOGOUT",
});
