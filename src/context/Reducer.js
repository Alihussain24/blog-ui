const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFeatching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFeatching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFeatching: false,
        error: true,
      };

    case "UPDATE_START":
      return {
        ...state,
        isFeatching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFeatching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFeatching: false,
        error: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isFeatching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
