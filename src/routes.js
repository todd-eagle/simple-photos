import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Uploadphotos from './components/Uploadphotos/Uploadphotos'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/photos" component={Uploadphotos} />
        <Route path={["/login", "/register"]} component={Login}/>
    </Switch>
)
