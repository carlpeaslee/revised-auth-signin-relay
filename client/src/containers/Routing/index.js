import React, { Component } from 'react'
import {Router, browserHistory} from 'react-router'
import routes from '../../routes'
import {applyRouterMiddleware} from 'react-router';

import {Store as RelayStore} from 'react-relay'
import useRelay from 'react-router-relay';


class Routing extends Component {
  render() {
    return (
      <Router
        environment={RelayStore}
        routes={routes}
        history={browserHistory}
        render={applyRouterMiddleware(useRelay)}
      />
    )
  }
}

export default Routing
