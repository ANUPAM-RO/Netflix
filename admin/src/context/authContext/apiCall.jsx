import { loginFailure, loginStart, loginSuccess } from "./AuthAction";
import axios from "axios";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);
        console.log(res.data)
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
};