import React from 'react';
import routes from './routes'
import { Normalize } from 'styled-normalize'
import {GlobalResetStyle, Wrapper} from './styles/Base/Base'
import Header from './components/Header/Header'

function App() {
  return (
    <>
     <Normalize />
     <GlobalResetStyle />
     <Header />
     <Wrapper>{routes}</Wrapper> 
    </>
  )
}

export default App;
