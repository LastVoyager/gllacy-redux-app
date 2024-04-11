import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { goodsActions } from '../../Store/cart-slice';

function GoodDetail() {
  const match = useRouteMatch(); //don't need to manually rewrite our root-path, for nested routes.   
  const params = useParams();
  
  //Redux
  const goods = useSelector(state => state.cart.goods);
  const goodDetails = goods.find((info) => info.id === Number(params.goodId));

  console.log(goods); //result: SHOWS ARRAY
  console.log(goodDetails);  //result: UNDEFINED

  const dispatch = useDispatch();
  const addToCart = (goodDetails) => {
    dispatch(goodsActions.addToCart(goodDetails));
  };

  return (
    <Fragment>
      <Route path={match.path} exact>
        <div className="main-container">
          <section className="main-proposition">
            <img src={`${process.env.REACT_APP_SERVER_URL}/${goodDetails.image}`} alt={goodDetails.title}/>
            <h1>{goodDetails.title}</h1> {/* //result: FIRST OF ALL SHOWING VALID VALUE AFTER PAGE RELOADING it CRASHES */}
            <p>{goodDetails.price}</p>
            <p>{goodDetails.info}</p>
            <button className="button" onClick={addToCart}>Add to cart</button>
             {/*  <Link className="button" to={`/main/${props.info.id}`}>Show more info</Link> */}
            <Link className="btn--flat" to={`${match.url}/comments`}></Link>
          </section>
        </div>
      </Route>
    </Fragment>
  );
}

export default GoodDetail;
