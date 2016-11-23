import React, {Component} from 'react'
import {connect} from 'react-redux'
import SignUpCard from '../SignUpCard'
import ProfileCard from '../ProfileCard'
import LoginCard from '../LoginCard'
import LoginSignupTabs from '../LoginSignupTabs'



import {attemptSignup, logout, attemptLogin} from '../../actions/auth'

import {showLoginCard, showSignupCard} from '../../actions/ui'

class DrawerAuthCard extends Component {

  showProfile = () => {
    if (this.props.user) {
      return (
        <ProfileCard
          logout={this.props.logout}
          user={this.props.user}
        />
      )
    }
    if (!this.props.user && this.props.loginCardShowing){
      return (
        <LoginCard
          attemptLogin={this.props.attemptLogin}
          awaitingLoginResponse={this.props.awaitingLoginResponse}
          loginError={this.props.loginError}
        />
      )
    }
    if (!this.props.user && this.props.signupCardShowing) {
      return (
        <SignUpCard
          attemptSignup={this.props.attemptSignup}
          awaitingSignupResponse={this.props.awaitingSignupResponse}
          awaitingLoginResponse={this.props.awaitingLoginResponse}
          signupError={this.props.signupError}
        />
      )
    }
  }

  showTabs = () => {
    if (!this.props.user) {
      return (
        <LoginSignupTabs
          showSignupCard={this.props.showSignupCard}
          showLoginCard={this.props.showLoginCard}
          loginCardShowing={this.props.loginCardShowing}
          signupCardShowing={this.props.signupCardShowing}
        />
      )
    }
  }

  render() {
    return (
      <div
        style={{
          margin: '10px',
          border: 'solid 1px black'
        }}
      >
        {this.showTabs()}
        <div
          style={{
            margin: '5px'
          }}
        >
          {this.showProfile()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    awaitingLoginResponse: state.auth.awaitingLoginResponse,
    awaitingSignupResponse: state.auth.awaitingSignupResponse,
    user: state.auth.user,
    loginCardShowing: state.ui.loginCardShowing,
    signupCardShowing:state.ui.signupCardShowing,
    loginError: state.ui.loginError,
    signupError: state.ui.signupError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptSignup: () => {
      dispatch(attemptSignup())
    },
    attemptLogin: () => {
      dispatch(attemptLogin())
    },
    showSignupCard: () => {
      dispatch(showSignupCard())
    },
    showLoginCard: () => {
      dispatch(showLoginCard())
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

DrawerAuthCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerAuthCard)

export default DrawerAuthCard
