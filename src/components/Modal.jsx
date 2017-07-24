import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from 'actions/User'

class Modal extends Component {
  constructor (props) {
    super(props)

    this.state = { register: false }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeModal = this.changeModal.bind(this)
  }

  changeModal () {
    this.setState({ register: !this.state.register })
  }

  handleSubmit () {
    this.props.signIn(this.email.value, this.password.value)
      .then(() => {
        window.location.reload()
      })
  }

  render () {
    return (
      <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {this.renderContentModal()}
      </div>
    )
  }

  renderContentModal () {
    if (!this.state.register) {
      return (
        <div className="modal-dialog cs-modal-login" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1>Halo!</h1>
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter email" ref={e => this.email = e} />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" id="password" placeholder="Password" ref={e => this.password = e} />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="float-left">
                  <div className="form-check">
                    <span className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Remember me
                    </span>
                  </div>
                </div>
                <div className="float-right">
                  Forget the password?
                </div>
                <div className="clearfix"></div>
                <div className="row">
                  <div className="col-12">
                    <button type="button" className="btn btn-lg btn-primary btn-block button" onClick={this.handleSubmit}>Log in</button>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="clearfix"></div>
                  <div className="float-left">
                    <p>Don't have any account?</p>
                  </div>
                  <div className="float-right">
                    <span onClick={this.changeModal}>Sign up</span>
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
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" id="email" placeholder="First Name" ref={e => this.email = e} />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" id="password" placeholder="Last Name" ref={e => this.password = e} />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg" id="password" placeholder="Email" ref={e => this.password = e} />
                      </div>
                      <div className="form-group">
                        <input type="number" className="form-control form-control-lg" id="password" placeholder="Phone Number" ref={e => this.password = e} />
                      </div>
                      <div className="form-group">
                        <input type="number" className="form-control form-control-lg" id="password" placeholder="Birthday" ref={e => this.password = e} />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" id="password" placeholder="Password" ref={e => this.password = e} />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="float-left">
                  <div className="form-check">
                    <span className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Remember me
                    </span>
                  </div>
                </div>
                <div className="float-right">
                  Forget the password?
                </div>
                <div className="clearfix"></div>
                <div className="row">
                  <div className="col-12">
                    <button type="button" className="btn btn-lg btn-primary btn-block button" onClick={this.handleSubmit}>Log in</button>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="clearfix"></div>
                  <div className="float-left">
                    Already have an account?
                  </div>
                  <div className="float-right">
                    <span onClick={this.changeModal}>Login</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(null, { signIn })(Modal)
