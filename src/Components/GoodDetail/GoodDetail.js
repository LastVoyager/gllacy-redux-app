import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { goodsActions } from '../../Store/cart-slice';

function QuoteDetail() {
  const match = useRouteMatch(); //don't need to manually rewrite our root-path, for nested routes.   
  const params = useParams();
  
  //Redux
  const goods = useSelector(state => state.cart.goods);
  //const dispatch = useDispatch();
  
  /* const addToCart = (info) => {
    dispatch(goodsActions.addToCart(info));
  }; */

  const quote = goods.find((quote) => quote.id === params.quoteId);

  return (
    <Fragment>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
