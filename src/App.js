import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GlobalStyle from './globalStyle';
import Theme from './Theme';
import Navbar from './components/Navbar';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import ShopPage from './page/ShopPage';
import ItemPage from './page/ItemPage';
import CartPage from './page/CartPage';
import MsPage from './page/MsPage';
import AddItemPage from './page/AddItemPage';
import { getAuthToken } from './utils';
import { getUser } from './redux/reducer/userSlice';
import { getItems } from './redux/reducer/itemSlice';

function App() {
  const token = getAuthToken();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getItems());
    if (token) {
      dispatch(getUser());
    }
  }, [token, dispatch]);

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/shop">
              <ShopPage />
            </Route>
            <Route exact path="/item/:id">
              <ItemPage />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/ms">
              <MsPage />
            </Route>
            <Route exact path="/addItem">
              <AddItemPage />
            </Route>
          </Switch>
        </Router>
      </Theme>
    </>
  );
}

export default App;
