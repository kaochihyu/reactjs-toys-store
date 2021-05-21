import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Theme from './Theme';
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </Router>
      </Theme>
    </>
  )
};

export default App;