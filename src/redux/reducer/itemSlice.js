import { createSlice } from '@reduxjs/toolkit';
import {
  getItemAPI,
  getItemsAPI,
  addItemAPI,
  deleteItemAPI,
  updateItemAPI,
} from '../../WebAPI';

const itemReducer = createSlice({
  name: 'item',
  initialState: {
    isLoadingItem: false,
    item: null,
    items: [],
    cartItems: [],
    deleteResponse: null,
    newItemResponse: null,
  },

  reducers: {
    setIsLoadingItem: (state, action) => {
      state.isLoadingItem = action.payload;
    },

    setItem: (state, action) => {
      state.item = action.payload;
    },

    setItems: (state, action) => {
      state.items = action.payload;
    },

    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },

    setDeleteResponse: (state, action) => {
      state.deleteResponse = action.payload;
    },

    setNewItemResponse: (state, action) => {
      state.newItemResponse = action.payload;
    },
  },
});

export const {
  setIsLoadingItem,
  setItem,
  setItems,
  setCartItems,
  setDeleteResponse,
  setNewItemResponse,
} = itemReducer.actions;

export const getItem = (id) => (dispatch) => {
  dispatch(setIsLoadingItem(true));
  return getItemAPI(id)
    .then((res) => {
      dispatch(setItem(res));
      dispatch(setIsLoadingItem(false));
      return res;
    })
    .catch((err) => {
      console.log(err);
      dispatch(setIsLoadingItem(false));
    });
};

export const getItems = () => (dispatch) => {
  dispatch(setIsLoadingItem(true));
  getItemsAPI()
    .then((res) => {
      dispatch(setItems(res));
      dispatch(setIsLoadingItem(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setIsLoadingItem(false));
    });
};

export const addItem =
  (itemName, description, itemTag, picture, quantity, price) => (dispatch) =>
    addItemAPI(itemName, description, itemTag, picture, quantity, price).then(
      (res) => {
        dispatch(setNewItemResponse(res));
        return res;
      }
    );

export const deleteItem = (id) => (dispatch) => {
  return deleteItemAPI(id).then((res) => dispatch(setDeleteResponse(res)));
};

export const updateItem =
  (itemId, itemName, description, itemTag, picture, quantity, price) =>
    (dispatch) => {
      dispatch(setIsLoadingItem(true));
      return updateItemAPI(
        itemId,
        itemName,
        description,
        itemTag,
        picture,
        quantity,
        price
      ).then((res) => {
        dispatch(setItem(res));
        dispatch(setIsLoadingItem(false));
        return res;
      });
    };

export default itemReducer.reducer;
