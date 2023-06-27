import { remove } from 'lodash';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  size: string;
}

type ToggleFavType = {
  id: string;
}

interface UserSliceTypes {
  userToken: string | null,
  user: {} | null;
  favProducts: any;
}

const initialState = {
  userToken: null,
  user: null,
  favProducts: [],
} as UserSliceTypes

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload
    },
    toggleFavProduct(state, action: PayloadAction<ToggleFavType>) {
      const index = state.favProducts.includes(action.payload.id);

      if (!index) {
        state.favProducts.push(action.payload.id);

        return;
      }

      remove(state.favProducts, id => id === action.payload.id);
    },
    setUserLogged(state, action: PayloadAction<ProductType>) {
      const index = state.favProducts.includes(action.payload.id);

      if (!index) {
        state.favProducts.push(action.payload.id);

        return {
          ...state,
          favProducts: state.favProducts
        };
      }

      remove(state.favProducts, id => id === action.payload.id);

      return {
        ...state,
        favProducts: state.favProducts
      };
    },
  },
})

export const { toggleFavProduct, setUserLogged, setUserData, setUserToken } = userSlice.actions
export default userSlice.reducer