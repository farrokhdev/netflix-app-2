export const ListReducer = (state, action) => {
  switch (action.type) {
    case "List_start":
      return {
        lists: [],
        fetching: true,
        error: false,
      };
    case "List_success":
      return {
        lists: action.payload,
        fetching: false,
        error: false,
      };
    case "List_failed":
      return {
        lists: [],
        fetching: false,
        error: true,
      };
    // delete
    case "delete_List_start":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "delete_List_success":
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        fetching: false,
        error: false,
      };
    case "delete_List_failed":
      return {
        ...state,
        fetching: false,
        error: true,
      };
    // create
    case "create_List_start":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "create_List_success":
      return {
        lists: [...state.lists, action.payload],
        fetching: false,
        error: false,
      };
    case "create_List_failed":
      return {
        ...state,
        fetching: false,
        error: true,
      };
    // update
    // case "update_List_start":
    //   return {
    //     lists: [],
    //     fetching: true,
    //     error: false,
    //   };
    // case "update_List_success":
    //   return {
    //     lists: action.payload,
    //     fetching: false,
    //     error: false,
    //   };
    // case "update_List_failed":
    //   return {
    //     lists: [],
    //     fetching: false,
    //     error: true,
    //   };
    default:
      return { ...state };
  }
};
