import { loginFailure, loginStart, loginSucCess } from "./AuthAction";
import axios from "axios";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);
        res.data.isAdmin && dispatch(loginSucCess(res.data))
        dispatch(loginSucCess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
};