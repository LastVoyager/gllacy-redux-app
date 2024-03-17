import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";


function QuoteDetail() {
  const match = useRouteMatch(); //don't need to manually rewrite our root-path, for nested routes.   
  const params = useParams();
  
  //const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

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
