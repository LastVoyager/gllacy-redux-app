import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'goods',
  initialState: {
    goods: [],
    //goodsAtCart: [],
    totalQuantity: 0,
    totalSumPlus: 0,
    totalSumPlusMinus: 0,
  },
  reducers: {
    uploadingGoods(state, action) {
      state.goods = action.payload.goods;
    },

    addToCart (state, action) { 
      const newGood = action.payload;
      const excitingGood = state.goods.findIndex(item => item.id === newGood.id);
      state.totalQuantity++;

      if (excitingGood > -1) {
        state.goods[excitingGood].amount++;
      } else {
        state.goods.push({...newGood, amount: 1})
      }

      state.totalSumPlus = state.goods.reduce(function(prev, current) {
        return prev + +current.amount
      }, 0);

    },

    removeFromCart (state, action) {
      const id = action.payload;
      const excitingGood = state.goods.findIndex (item => item.id === id.id);
      state.totalQuantity--;

      if (state.goods[excitingGood].amount >= 2 ) {

        state.goods[excitingGood].amount--;
      } else {
        state.goods.splice(excitingGood,1);
      }

      state.totalSumPlusMinus = state.goods.reduce((prev, current) => prev + Number(current.amount), 0);
    },
  },
});

export const goodsActions = cartSlice.actions;
export default cartSlice;