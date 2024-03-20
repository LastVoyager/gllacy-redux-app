import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './CartList.css'

const CartList = () => {
    const goodsAtCart = useSelector((state) => state.cart.goodsAtCart);
    /* let totalSum = value.request.reduce((s, { price }) => s + price, 0); */
    

    const totalSum = goodsAtCart.reduce((acc, item) => {
        acc += item.price * item.amount; 
        return acc;
    }, 0); 

    return (
        <div className="cart-content">
            <ul className="chosen-list">
                {goodsAtCart.map(info => (
                    <CartItem
                        key={info.id} 
                        info={info}
                       /*  itemAmount={value.cartAmount} */
                    >
                    </CartItem>
                ))}
            </ul>
            <span className="total-price">Итого: {totalSum} грн.</span>
            <form className="zalupa">
                <button className="button" type="submit">Оформить заказ</button>
            </form>
        </div>
    );
};

export default CartList;



