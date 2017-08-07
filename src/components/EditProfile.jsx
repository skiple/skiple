import React, { Component } from 'react'

class EditProfile extends Component {
  render () {
    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Edit Profile</h2>
            <form>
              <div className="form-group">
                <label htmlFor="formNama">First Name</label>
                <input type="text" className="form-control" id="formNama" ref={e => this.name = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formNomorHp">Last Name</label>
                <input type="text" className="form-control" id="formNomorHp" ref={e => this.nomorHp = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formJumlahTransfer">Email Address</label>
                <input type="text" className="form-control" id="formJumlahTransfer" ref={e => this.amount = e} />
              </div>
              <div className="form-group">
                <input type="date" className="form-control" id="password" placeholder="Birthday" />
              </div>
            </form>
            <button type="submit" className="btn btn-primary float-right">Save</button>
            <button type="submit" className="btn btn-primary float-right" style={{ 'marginRight': '20px' }}>Edit Password</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditProfile
