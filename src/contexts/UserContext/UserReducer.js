export const UserReducer = (state, action) => {
  switch (action.type) {
    case "User_start":
      return {
        users: [],
        fetching: true,
        error: false,
      };
    case "User_success":
      return {
        users: action.payload,
        fetching: false,
        error: false,
      };
    case "User_failed":
      return {
        users: [],
        fetching: false,
        error: true,
      };
    // delete
    case "delete_User_start":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "delete_User_success":
      return {
        users: state.users.filter((user) => user._id !== action.payload),
        fetching: false,
        error: false,
      };
    case "delete_User_failed":
      return {
        ...state,
        fetching: false,
        error: true,
      };
    // create
    case "create_User_start":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "create_User_success":
      return {
        users: [...state.users, action.payload],
        fetching: false,
        error: false,
      };
    case "create_User_failed":
      return {
        ...state,
        fetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
