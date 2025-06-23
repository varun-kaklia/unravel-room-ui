import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (s,{payload})=>{
      const item=s.items.find(i=>i.id===payload.id);
      item? item.qty++ : s.items.push({...payload, qty:1});
    },
    removeItem:(s,{payload})=>{s.items=s.items.filter(i=>i.id!==payload)},
    clearCart: s=>{s.items=[]},
  },
});
export const { addItem, removeItem, clearCart } = slice.actions;
export default slice.reducer;