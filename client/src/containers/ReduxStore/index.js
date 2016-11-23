import React, { Component } from 'react'

import {Provider} from 'react-redux'
import store from '../../store'
import MaterialUi from '../MaterialUi' 

class ReduxStore extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <MaterialUi/>
      </Provider>
    )
  }
}

export default ReduxStore
