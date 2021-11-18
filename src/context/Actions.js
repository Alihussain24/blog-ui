export const LoginStart = (userlogin) => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});



/// profile setting
export const UpdateStart = (userUpdate) => ({
  type: "UPDATE_START",
});

export const  UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});
export const  UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
