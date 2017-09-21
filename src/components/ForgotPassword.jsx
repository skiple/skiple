import React, { Component } from 'react'
import { connect } from 'react-redux'
import { forgotPassword } from 'actions/User'

class ForgotPassword extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.forgotPassword({ email: this.email.value })
      .then(window.location.href = '/')
  }

  render () {
    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Forgot Password</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="formNama">Email</label>
                <input type="text" className="form-control" id="email" ref={e => this.email = e}/>
              </div>
              <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { forgotPassword })(ForgotPassword)
