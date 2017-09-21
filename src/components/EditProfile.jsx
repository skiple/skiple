import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getProfile, editProfile, updateEditProfileData } from 'actions/User'

class EditProfile extends Component {
  constructor (props) {
    super(props)

    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
  }

  onHandleChange (e) {
    if (e.target.id === 'firstName') {
      this.props.updateEditProfileData({ prop: 'first_name', value: e.target.value })
    }
    if (e.target.id === 'lastName') {
      this.props.updateEditProfileData({ prop: 'last_name', value: e.target.value })
    }
    if (e.target.id === 'phone') {
      this.props.updateEditProfileData({ prop: 'phone', value: e.target.value })
    }
  }

  onHandleSubmit (e) {
    e.preventDefault()
    const { first_name, last_name, phone } = this.props

    let data = {
      first_name,
      last_name,
      phone
    }

    this.props.editProfile(data)
      .then(window.location.reload())
      .catch(err => console.log(err.response))
  }

  componentDidMount () {
    this.props.getProfile()
      .then(res => console.log(res.payload.user))
  }

  render () {
    const {
      first_name,
      last_name,
      phone
    } = this.props

    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 style={{ fontSize: '24px' }}>Edit Profile</h2>
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label htmlFor="formNama">First Name</label>
                <input type="text" className="form-control" id="firstName" value={first_name} onChange={this.onHandleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="formNomorHp">Last Name</label>
                <input type="text" className="form-control" id="lastName" value={last_name} onChange={this.onHandleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="formJumlahTransfer">Phone</label>
                <input type="phone" className="form-control" id="phone" value={phone} onChange={this.onHandleChange} />
              </div>
              <button type="submit" className="btn btn-primary float-right">Save</button>
              {/* <div className="form-group">
                <label htmlFor="formJumlahTransfer">Birthday</label>
                <input type="date" className="form-control" id="birthday" onFocus={() => this.birthday.type = 'date'} onBlur={() => this.birthday.type = 'date'} ref={e => this.birthday = e}/>
                <input type="text" className="form-control" id="birthday" placeholder="Birthday" onFocus={() => this.birthday.type = 'date'} onBlur={() => this.birthday.type = 'date'} ref={e => this.birthday = e} />
              </div> */}
            </form>
            <Link to={'/editpassword'} className="btn btn-primary float-right" style={{ 'marginRight': '20px', 'color': '#fff' }}>Edit Password</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  const { first_name, last_name, phone } = user

  return { first_name, last_name, phone }
}

export default connect(mapStateToProps, { getProfile, editProfile, updateEditProfileData })(EditProfile)
