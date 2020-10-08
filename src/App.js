import React, {useEffect} from 'react';
import routes from './routes'
import {Normalize} from 'styled-normalize'
import {connect} from 'react-redux'
import {getUserSession} from './redux/reducers/AuthReducer'
import {GlobalResetStyle, Wrapper} from './styles/Base/Base'
import auth from './components/Auth/auth'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App(props) {

  // console.log("App props: ", props)
 const {getUserSession} = props
  useEffect(() =>{
      getUserSession().then().catch(error=>{return error})
      auth.isLoggedIn(localStorage.getItem("localAuth"))
  },[getUserSession])

  return (
    <>
      <Normalize />
      <GlobalResetStyle />
      <Header />
      <Wrapper>{routes}</Wrapper> 
      <Footer />
    </>
  )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUserSession})(App)