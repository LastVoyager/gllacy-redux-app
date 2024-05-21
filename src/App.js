import React, { Fragment, useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import MainCatalog from './Components/MainCatalog/MainCatalog';
import GoodDetail from './Components/GoodDetail/GoodDetail';
import Footer from './Components/Footer/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from './Store/cart-actions';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import './@media.css';
import Subscribe from './Components/Subscribe/Subscribe';

function App() {
  const dispatch = useDispatch ();
 /*  const [modalShown, setModalShown] = useState(false);
  const showModalHandler = () => {
    setModalShown(true);
  };
  const hideModalHandler = () => {
    setModalShown(false);
  }; */
  
  const modalShown = useSelector(state => state.ui.modalShown)

  useEffect(()=> {
    dispatch(fetchCartData());
  }, [dispatch]);


  return (
    //<CartProvider>
    <Fragment>
      <div className='body'>
        {modalShown && <Subscribe/>}
        <Header></Header>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/main'/>
            </Route>
            <Route path='/main' exact>
              <Main/>
            </Route>
            <Route path='/catalog'>
              <MainCatalog/>
            </Route>
            <Route path='/main/:goodId'>
              <GoodDetail/>
            </Route>
          </Switch>
        <Footer></Footer>
      </div>
    </Fragment>
    //</CartProvider>
  );
}

export default App;