import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import signIn from '../actions/user/sign-in'
import Title from '../components/Title'
export class SignIn extends PureComponent {
  submitForm(event) {
    event.preventDefault()
      const user = {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      this.props.signIn(user)
  }
  validateAll() {
    return
      this.validateEmail() &&
      this.validatePassword()
  }
  validateEmail() {
    const { email } = this.refs
    if (email.value === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }
    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }
  validatePassword() {
    const { password } = this.refs
    if (password.value.match(/[a-zA-Z]+/) && password.value.match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }
    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }
  render() {
    return (
      <div className="sign-in form">
        <Title content="Sign In" />
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="email" type="email" placeholder="Email address"
              onChange={this.validateEmail.bind(this)} />
          </div>
          <div className="input">
            <input ref="password" type="password" placeholder="Password"
              onChange={this.validatePassword.bind(this)} />
          </div>
          <input type="submit" value="Sign in" />
        </form>
      </div>
    )
  }
}
export default connect(null, { signIn })(SignIn)
