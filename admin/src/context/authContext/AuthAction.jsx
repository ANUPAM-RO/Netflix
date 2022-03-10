export const loginStart = () => ({
    type: "LOGIN_START",
});
export const loginSucCess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});
export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});