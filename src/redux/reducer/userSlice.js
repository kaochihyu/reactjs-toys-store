import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../utils";
import { registerAPI, loginAPI, getMeAPI, updateCartAPI, linePushAPI } from "../../WebAPI";

const userReducer = createSlice({
  name: "user",
  initialState: {
    isLoadingUser: false,
    user: null,
    errorMessage: null,
  },

  reducers: {
    setIsLoadingUser: (state, action) => {
      state.isLoadingUser = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setIsLoadingUser, setUser, setErrorMessage } =
  userReducer.actions;

export const register = (username, password, nickname) => (dispatch) =>
  registerAPI(username, password, nickname).then((resRegister) => {
    if (resRegister.ok === 0) {
      dispatch(setErrorMessage(resRegister.message));
      return;
    }
    setAuthToken(resRegister.token);
    return getMeAPI().then((resMe) => {
      if (resMe.ok !== 1) {
        setAuthToken(null);
        dispatch(setErrorMessage(resMe.toSring()));
        return;
      }
      dispatch(setUser(resMe.data));
      return resMe;
    });
  });

export const login = (username, password) => (dispatch) =>
  loginAPI(username, password).then((resLogin) => {
    if (resLogin.ok === 0) {
      dispatch(setErrorMessage(resLogin.message));
      return;
    }
    setAuthToken(resLogin.token);
    return getMeAPI().then((resMe) => {
      if (resMe.ok !== 1) {
        setAuthToken(null);
        dispatch(setErrorMessage(resMe.toString()));
        return;
      }
      dispatch(setUser(resMe.data));
      return resMe;
    });
  });

export const getUser = () => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  getMeAPI().then((res) => {
    if (res) {
      dispatch(setUser(res.data));
      dispatch(setIsLoadingUser(false));
    }
  });
};

export const updateUserCart = (id, cart) => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  return updateCartAPI(id, cart).then((res) => {
    dispatch(setUser(res));
    dispatch(setIsLoadingUser(false));
    return res;
  });
};

export default userReducer.reducer;
