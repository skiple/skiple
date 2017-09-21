import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePassword } from 'actions/User'

class EditPassword extends Component {
  constructor (props) {
    super(props)

    this.onHandleSumbit = this.onHandleSumbit.bind(this)
  }

  onHandleSumbit (e) {
    e.preventDefault()
    let data = {
      new_password: this.newPass.value,
      new_password_confirmation: this.retypePass.value,
      old_password: this.oldPass.value
    }

    this.props.changePassword(data)
      .then(res => console.log(res))
  }

  render () {
    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Edit Password</h2>
            <form onSubmit={this.onHandleSumbit}>
              <div className="form-group">
                <label htmlFor="formNama">Old Password</label>
                <input type="password" className="form-control" id="password" ref={e => this.oldPass = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formPhone">New Password</label>
                <input type="password" className="form-control" id="formPhone" ref={e => this.newPass = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formJumlahTransfer">Re-type New Password</label>
                <input type="password" className="form-control" id="formJumlahTransfer" ref={e => this.retypePass = e} />
              </div>
              <button type="submit" className="btn btn-primary float-right">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { changePassword })(EditPassword)
