import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Item} from '../../screens/HomeScreen';
interface WishlistState {
  items: Item[]; // Ensure `items` is an array
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Item>) => {
      if (!state.items.find(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleWishlist: (state, action: PayloadAction<Item>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const {addToWishlist, removeFromWishlist, toggleWishlist} =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
