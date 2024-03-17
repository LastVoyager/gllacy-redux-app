import React, {useState, useEffect, useCallback} from "react";
/* import goods from "../Components/Goods"; */

export const CartContext = React.createContext();

const CartProvider = (props) => {
    const [goods, setGoods] = useState([ ]);
    const [request, setRequest] = useState([ ]);
    const [sameItemsIndex, setSameItemsIndex] = useState( 0 );
    
    //test useEffect just in case.
    useEffect(()=> {
        if (sameItemsIndex > 2) {
            console.log('more then two')
        }
    }, [sameItemsIndex]);


    const fetchData = useCallback (async() => {
        const response = await fetch (`${process.env.REACT_APP_SERVER_URL}/api/goods`);
        const data = await response.json();
        setGoods(data);
    }, []);

    useEffect(() => {
        fetchData();
      }, [fetchData]); 

      /* const fetchData = () => {
        fetch ('https://localhost:4000/goods');
      }; */

    //add to cart from index.html
    const formRequest = (info) => { 
        const isInCart= request.findIndex(item => item.id === info.id);
        const data = [...request];
        
        if (isInCart > -1) {
            data[isInCart].amount++;
            
        } else {
            data.push({...info, amount: 1})
        }

        let sum = data.reduce(function(prev, current) {
            return prev + +current.amount
          }, 0);
          
        return (setRequest(data), setSameItemsIndex(sum));
    }
    

    //remove from cart
    const removeItemCartHandler = (info) => {

        const sameIndex = request.findIndex (item => item.id === info.id);
        const data = [...request];

        if (data[sameIndex].amount >= 2 ) {

            data[sameIndex].amount--;
        } else {
            data.splice(sameIndex,1);
        }

        const sumMinus = data.reduce((prev, current) => prev + Number(current.amount), 0);

        setRequest(data);
        setSameItemsIndex(sumMinus);
    
        return ;
    };

    const value = {
        removeItemCartHandler,
        formRequest,
        goods,
        request,
        sameItemsIndex,
    };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;