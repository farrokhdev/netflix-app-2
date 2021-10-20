export const AuthReducer = (state, action) => {
  // switch (action.type) {
  //   case "Login_start":
  //     return {
  //       user: null,
  //       fetching: true,
  //       error: false,
  //     };
  //   case "Login_success":
  //     return {
  //       user: action.payload,
  //       fetching: false,
  //       error: false,
  //     };
  //   case "Login_failed":
  //     return {
  //       user: null,
  //       fetching: false,
  //       error: true,
  //     };

  //   // Logout
  //   case "LOGOUT":
  //     return {
  //       user: null,
  //       fetching: false,
  //       error: false,
  //     };

  //   default:
  //     return { ...state };
  // }

  if (action.type === "Login_start") {
    return {
      user: null,
      fetching: true,
      error: false,
    };
  } else if (action.type === "Login_success") {
    return {
      user: action.payload,
      fetching: false,
      error: false,
    };
  } else if (action.typ === "Login_failed") {
    return {
      user: null,
      fetching: false,
      error: true,
    };
  } else if (action.type === "LOGOUT") {
    return {
      user: null,
      fetching: false,
      error: false,
    };
  } else {
    return { ...state };
  }
};
