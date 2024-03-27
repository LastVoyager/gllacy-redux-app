import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { goodsActions } from '../../Store/cart-slice';

function GoodDetail() {
  const match = useRouteMatch(); //don't need to manually rewrite our root-path, for nested routes.   
  const params = useParams();
  
  //Redux
  const goods = useSelector(state => state.cart.goods);
  const info = goods.find((info) => info.id === params.goodId);

  console.log(goods); //result: SHOWS ARRAY
  console.log(info);  //result: UNDEFINED

  const dispatch = useDispatch();
  const addToCart = (info) => {
    dispatch(goodsActions.addToCart(info));
  };

  return (
    <Fragment>
      <Route path={match.path} exact>
        <div className="main-container">
          <section className="main-proposition">
            <h1>{goods[0].title}</h1> {/* //result: FIRST OF ALL SHOWING VALID VALUE AFTER PAGE RELOADING it CRASHES */}
            <p></p>
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
