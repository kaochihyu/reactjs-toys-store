import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Theme from './Theme';
import Navbar from './components/Navbar';
import HomePage from './page/HomePage';

function App() {

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Theme>
    </>
  );
}

export default App;
