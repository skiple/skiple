import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signIn, signUp } from 'actions/User'
import { selectedActivity } from 'actions/Activity'

class Modal extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      modal: false,
      emailLogin: '',
      passLogin: '',
      required: ''
    }

    this.login = this.login.bind(this)
    this.signUp = this.signUp.bind(this)
    this.changeModal = this.changeModal.bind(this)
  }

  changeModal () {
    this.setState({ modal: !this.state.modal })
  }

  login () {
    if (this.props.params.id === 1) {
      if (!this.email.value && !this.password.value) this.setState({ emailLogin: 'The email field is required', passLogin: 'The password field is required' })
      else if (!this.email.value) this.setState({ emailLogin: 'The email field is required' })
      else if (!this.password.value) this.setState({ passLogin: 'The password field is required' })
      else {
        this.props.signIn(this.email.value, this.password.value)
          .then(() => {
            window.location.reload()
          }).catch((error) => {
            if (error.response.status === 404) {
              this.setState({ required: error.response.data.message })
            }
          })
      }
    } else {
      if (!this.email.value && !this.password.value) this.setState({ emailLogin: 'The email field is required', passLogin: 'The password field is required' })
      else if (!this.email.value) this.setState({ emailLogin: 'The email field is required' })
      else if (!this.password.value) this.setState({ passLogin: 'The password field is required' })
      else {
        this.props.signIn(this.email.value, this.password.value)
          .then(() => {
            $('.myModalAuth').modal('hide')
            this.props.selectedActivity(this.props.params.activity, this.props.params.date, this.props.params.quantity)
            this.context.router.push('/checkout')
          }).catch((error) => {
            if (error.response.status === 404) {
              this.setState({ required: error.response.data.message })
            }
          })
      }
    }
  }

  signUp () {
    let data = {
      first_name: this.firstName.value,
      last_name: this.lastName.value,
      email: this.email.value,
      phone: this.phone.value,
      birthday: this.birthday.value,
      password: this.password.value,
      password_confirmation: this.confirmPassword.value
    }

    if (!this.firstName.value || !this.lastName.value || !this.email.value || !this.phone.value || !this.birthday.value || !this.password.value || !this.confirmPassword.value) {
      this.setState({ required: 'All fields is required' })
    } else {
      if (this.password.value.length < 8) {
        this.setState({ required: 'The password must be at least 8 characters' })
      } else if (this.confirmPassword.value !== this.password.value) {
        this.setState({ required: 'The password confirmation does not match' })
      } else {
        this.props.signUp(data).then(() => window.location.reload())
      }
    }
  }

  render () {
    return (
      <div className="modal fade myModalAuth" id="myModalAuth" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {this.renderContentModal()}
      </div>
    )
  }

  renderContentModal () {
    if (!this.state.modal) {
      return (
        <div className="modal-dialog cs-modal-login" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1>Halo!</h1>
                    <p className="text-danger">{this.state.required}</p>
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg form-custom" id="email" placeholder="Enter email" ref={e => this.email = e} />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg form-custom" id="password" placeholder="Password" ref={e => this.password = e} />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="float-left none-float">
                  <div className="form-check font-grey">
                    <label className="form-check-label"></label>
                    <input type="checkbox" className="form-check-input" />Remember me
                  </div>
                </div>
                <div className="float-right none-float">
                  <p className="font-grey">Forgot the password?</p>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                  <div className="col-12">
                    <button type="button" className="btn btn-lg btn-primary btn-block button" onClick={this.login}>Log in</button>
                  </div>
                </div>
                <div className="modal-footer font-grey">
                  <div className="clearfix"></div>
                  <div className="float-left">
                    <p>Don't have any account?</p>
                  </div>
                  <div className="float-right">
                    <p onClick={this.changeModal}><span className="font-blue" style={{ 'cursor': 'pointer' }}>Sign up</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="modal-dialog cs-modal-register" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1>Let's get started</h1>
                    <p className="text-danger">{this.state.required}</p>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg form-custom" id="firstName" placeholder="First Name" ref={e => this.firstName = e} />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg form-custom" id="lastName" placeholder="Last Name" ref={e => this.lastName = e} />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg form-custom" id="Email" placeholder="Email" ref={e => this.email = e} />
                      </div>
                      <div className="form-group">
                        <input type="number" className="form-control form-control-lg form-custom" id="phone" placeholder="Phone Number" ref={e => this.phone = e} />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg form-custom" id="birthday" placeholder="Birthday" onFocus={() => this.birthday.type = 'date'} onBlur={() => this.birthday.type = 'date'} ref={e => this.birthday = e} />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg form-custom" id="password" placeholder="Password" ref={e => this.password = e} />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg form-custom" id="confirmPassword" placeholder="Confirmation Password" ref={e => this.confirmPassword = e} />
                      </div>
                      <button type="button" className="btn btn-lg btn-primary btn-block form-custom" onClick={this.signUp}>Sign up</button>
                    </form>
                  </div>
                </div>
                <div className="modal-footer font-grey">
                  <div className="float-left">
                    <p>Already have an account?</p>
                  </div>
                  <div className="float-right">
                    <p onClick={this.changeModal}><span className="font-blue" style={{ 'cursor': 'pointer' }}>Login</span></p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(null, { signIn, signUp, selectedActivity })(Modal)
