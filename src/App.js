import React from 'react';
import GlobalStyle from './globalStyle';
import Theme from './Theme';
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Navbar />
      </Theme>
    </>
  )
};

export default App;