import React, { Component } from 'react'
class GoogleAuth extends Component {
  state = { isSignedIn: null }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '197201738779-qvs9mau6o3tskp70735bonoj74ut7eat.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange()
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  handleSignOut = () => {
    this.auth.signOut()
  }
  handleSignIn = () => {
    this.auth.signIn()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.handleSignOut} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.handleSignIn} className='ui red google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      )
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth
