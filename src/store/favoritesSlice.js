import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'fav',
  initialState: { ids: [] },
  reducers: {
    toggleFav: (s, { payload }) => {
      s.ids = s.ids.includes(payload)
        ? s.ids.filter(id => id !== payload)
        : [...s.ids, payload];
    },
  },
});
export const { toggleFav } = slice.actions;
export default slice.reducer;
