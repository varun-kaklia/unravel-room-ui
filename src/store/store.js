import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import cartReducer  from './cartManagementSlice';
import favReducer from './favoritesSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart : cartReducer,
    fav  : favReducer,
  },
})