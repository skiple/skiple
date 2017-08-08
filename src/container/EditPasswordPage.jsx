import React, { Component } from 'react'

import Header from 'components/Header'
import EditPassword from 'components/EditPassword'

class EditPasswordPage extends Component {
  render () {
    return (
      <div className="container">
        <Header/>
        <EditPassword/>
      </div>
    )
  }
}

export default EditPasswordPage
