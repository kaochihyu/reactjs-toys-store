import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userSlice';
import itemReducer from './reducer/itemSlice';

export default configureStore({
  reducer: {
    item: itemReducer,
    user: userReducer,
  },
})