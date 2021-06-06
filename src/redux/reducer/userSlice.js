import { createSlice } from '@reduxjs/toolkit';
import { setAuthToken } from '../../utils';
import { registerAPI, loginAPI, getMeAPI } from '../../WebAPI';

const userReducer = createSlice({
  name: 'user',
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
  }
})

export const {
  setIsLoadingUser,
  setUser,
  setErrorMessage
} = userReducer.actions;

export const register = (username, password, nickname) => (dispatch) => registerAPI(username, password, nickname)
  .then((resRegister) => {
    if (resRegister.status === 401) {
      dispatch(setErrorMessage(resRegister.message))
      return;
    }
    setAuthToken(resRegister.access_token);
    return getMeAPI().then((resMe) => {
      console.log("me", resMe)
      if (resMe.status === 401) {
        setAuthToken(null);
        dispatch(setErrorMessage(resMe.message));
        return;
      }
      dispatch(setUser(resMe.data))
      return resMe;
    })
  })

export const login = (username, password) => (dispatch) => loginAPI(username, password)
  .then((resLogin) => {
    if (resLogin.status === 401) {
      dispatch(setErrorMessage(resLogin.message))
      return;
    }
    setAuthToken(resLogin.access_token);
    return getMeAPI().then((resMe) => {
      if (resMe.status === 401) {
        setAuthToken(null);
        dispatch(setErrorMessage(resMe.message));
        return;
      }
      dispatch(setUser(resMe.data))
      return resMe;
    })
  });


export const getUser = () => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  getMeAPI().then((res) => {
    if (res) {
      dispatch(setUser(res.data));
      dispatch(setIsLoadingUser(false));
    }
  })
}

export default userReducer.reducer;

