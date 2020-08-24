import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Account from './components/Account/Account'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        {/* <Route path="/login" component={Login} /> */}
        <Route path={["/login", "/register"]} component={Login}/>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute path="/profile" component={Profile} />
    </Switch>
)
