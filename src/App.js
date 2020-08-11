import React, {useEffect} from 'react';
import routes from './routes'
import {Normalize} from 'styled-normalize'
import {connect} from 'react-redux'
import {getUserSession} from './redux/reducers/AuthReducer'
import {GlobalResetStyle, Wrapper} from './styles/Base/Base'
import Header from './components/Header/Header'

function App(props) {

 const {getUserSession} = props

  useEffect(() =>{
      getUserSession().then().catch(error=>{return error})
  },[getUserSession])

  return (
    <>
      <Normalize />
      <GlobalResetStyle />
      <Header />
      <Wrapper>{routes}</Wrapper> 
    </>
  )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUserSession})(App)