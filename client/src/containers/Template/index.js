import React, {Component} from 'react'
import SideDrawer from '../../components/SideDrawer'


class Template extends Component {
  render() {
    return (
      <div>
        <SideDrawer/>
        <header
        >
          <h1>TicTacTuring</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template
