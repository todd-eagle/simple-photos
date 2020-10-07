import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import auth from '../Auth/auth'


const ProtectedRoute = ({component: Component, ...rest}) => {
    //  console.log("state?: ", this.state)
    // console.log(this.props);
    return (
        <Route {...rest} render = {
            (props) => {
                // console.log("auth.authenticated ", auth.authenticated);
                if(auth.authenticated) {
                    return <Component {...props} />
                }else{
                    return <Redirect to={
                        {
                          pathname: '/',
                          state: {
                            from: props.location
                          }
                        }
                      } />
                }
            }
        } />
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(ProtectedRoute)

