import React, { Component } from 'react'
import Relay from 'react-relay'

class Users extends Component {
  render() {
    return (
      <div
        style={{
          width: '50%',
          margin: 'auto'
        }}
      >

        <h1>This is the users component</h1>

      </div>
    )
  }
}

// export default Users

export default Relay.createContainer(Users, {
  fragments: {
    getPeople: () => Relay.QL`
      getPeople(all) {
        personId,
        email,
        name
      }
    `,
  },
})
