import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'goods',
  initialState: {
    goods: [],
    goodsAtCart: [],
    totalQuantity: 0,
  },
  reducers: {
    uploadingGoods(state, action) {
      state.goods = action.payload.goods;
    },

    addToCart (state, action) { 
      const newGood = action.payload;
      const excitingGood = state.goodsAtCart.findIndex(item => item.id === newGood.id);
      state.totalQuantity++;

      if (excitingGood > -1) {
        state.goodsAtCart[excitingGood].amount++;
      } else {
        state.goodsAtCart.push({...newGood, amount: 1})
      }

      state.totalQuantity = state.goodsAtCart.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);
    },

    removeFromCart (state, action) {
      const id = action.payload;
      const excitingGood = state.goodsAtCart.findIndex (item => item.id === id.id);
      state.totalQuantity--;

      if (state.goodsAtCart[excitingGood].amount >= 2 ) {

        state.goodsAtCart[excitingGood].amount--;
      } else {
        state.goodsAtCart.splice(excitingGood,1);
      }

      state.totalQuantity = state.goodsAtCart.reduce((prev, current) => prev + Number(current.amount), 0);
    },
  },
});

export const goodsActions = cartSlice.actions;
export default cartSlice;