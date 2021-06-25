import axios from "axios";
import { AUTH, APPOINT } from "../constants/actionTypes";
import * as api from "../api/index";

export const appoint = (appointData) => async (dispatch) => {
  try {
    dispatch({ type: APPOINT, payload: appointData });
    await axios.post("http://localhost:8080/api/signup", appointData);
  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: AUTH, payload: formData });
    await axios.post("http://localhost:8080/api/signup", formData);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
