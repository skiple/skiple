import React, { Component } from 'react'

class EditPassword extends Component {
  render () {
    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Edit Password</h2>
            <form>
              <div className="form-group">
                <label htmlFor="formNama">Old Password</label>
                <input type="text" className="form-control" id="password" ref={e => this.oldPass = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formPhone">New Password</label>
                <input type="text" className="form-control" id="formPhone" ref={e => this.newPass = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formJumlahTransfer">Re-type New Password</label>
                <input type="text" className="form-control" id="formJumlahTransfer" ref={e => this.retypePass = e} />
              </div>
            </form>
            <button type="submit" className="btn btn-primary float-right">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditPassword
