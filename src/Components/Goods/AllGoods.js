import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import { goodsActions } from '../../Store/cart-slice';
//import goods from '../Goods';
import Good  from './Good';
import './AllGoods.css';


function AllGoods (props) {

 //Redux
  const goods = useSelector(state => state.cart.goods);
  const dispatch = useDispatch();
  
  const addToCart = (info) => {
    dispatch(goodsActions.addToCart(info));
  };

  return (
    <ul className="populars">
      {goods.slice(0, 4).map(info => (
        <Good
          click={() => addToCart(info)}
          key={info.id} 
          info={info}
          >
        </Good>
      ))}
    </ul>
  );
}

export default AllGoods;