import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import Profile from './components/Profile/Profile'
import Account from './components/Account/Account'
import SearchResults from './components/SearchResults/SearchResults'
import FourZeroFour from './components/FourZeroFour/FourZeroFour'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProfilePage from './components/ProfilePage/ProfilePage'

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchResults} />
        <Route path="/profiles" component={ProfilePage} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route component={FourZeroFour} />
    </Switch>
)
