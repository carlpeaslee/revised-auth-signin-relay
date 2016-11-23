import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Template from '../containers/Template'

import home from '../views/home'
import profile from '../views/profile'

import Users from '../containers/Users'

import getPeople from '../queries/getPeople'


const createRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={home} />
      <Route
        path="/profile"
        component={profile}
      />
      <Route
        path="/users"
        component={Users}
        queries={getPeople}
      />
    </Route>
  )
}

const routes = createRoutes()

export default routes
