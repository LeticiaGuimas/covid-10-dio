import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from '../src/commons/Styles/global-styles'
import Main from '../src/containers/Main'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
