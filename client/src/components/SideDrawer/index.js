import React, {Component} from 'react'
import {Drawer} from 'material-ui'
import DrawerAuthCard from '../DrawerAuthCard'

class SideDrawer extends Component {
  render() {
    return (
      <Drawer>
        <DrawerAuthCard/>
      </Drawer>
    )
  }
}

export default SideDrawer
