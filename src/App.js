import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Theme from './Theme';
import Navbar from './components/Navbar';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import ShopPage from './page/ShopPage';


function App() {

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
          </Switch>
        </Router>
      </Theme>
    </>
  );
}

export default App;
