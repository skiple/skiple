import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getProfile } from 'actions/User'

class EditProfile extends Component {
  componentDidMount () {
    this.props.getProfile()
  }

  render () {
    const { dataUser } = this.props
    console.log(dataUser)
    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 style={{ fontSize: '24px' }}>Edit Profile</h2>
            <form>
              <div className="form-group">
                <label htmlFor="formNama">First Name</label>
                <input type="text" className="form-control" id="firstName" ref={e => this.firstName = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formNomorHp">Last Name</label>
                <input type="text" className="form-control" id="lastName" ref={e => this.lastName = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formJumlahTransfer">Email Address</label>
                <input type="text" className="form-control" id="email" ref={e => this.email = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formJumlahTransfer">Birthday</label>
                <input type="date" className="form-control" id="birthday" onFocus={() => this.birthday.type = 'date'} onBlur={() => this.birthday.type = 'date'} ref={e => this.birthday = e}/>
                {/* <input type="text" className="form-control" id="birthday" placeholder="Birthday" onFocus={() => this.birthday.type = 'date'} onBlur={() => this.birthday.type = 'date'} ref={e => this.birthday = e} /> */}
              </div>
            </form>
            <button type="submit" className="btn btn-primary float-right">Save</button>
            <Link to={'/editpassword'} className="btn btn-primary float-right" style={{ 'marginRight': '20px', 'color': '#fff' }}>Edit Password</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  const { dataUser } = user

  return { dataUser }
}

export default connect(mapStateToProps, { getProfile })(EditProfile)
