import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import TestForm from './components/TestForm/TestForm'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/testform" component={TestForm} />
        <Route path={["/login", "/register"]} component={Login}/>
    </Switch>
)
