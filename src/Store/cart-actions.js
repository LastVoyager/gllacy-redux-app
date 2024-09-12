import { goodsActions } from "./cart-slice";


//getting data
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/goods`
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const counterGoods = await fetchData();
      dispatch(
        goodsActions.uploadingGoods({
          goods: counterGoods,
        })
      );
    } catch (error) {

    }
  };
};
