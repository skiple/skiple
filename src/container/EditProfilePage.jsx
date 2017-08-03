import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import EditProfile from 'components/EditProfile'

class EditProfilePage extends Component {
  render () {
    return (
      <div>
        <Header />
        <EditProfile />
        <Footer />
      </div>
    )
  }
}

export default EditProfilePage
