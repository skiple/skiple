import React, { Component } from 'react'

import Header from 'components/Header'
import ForgotPassword from 'components/ForgotPassword'

class ForgotPasswordPage extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <ForgotPassword />
      </div>
    )
  }
}

export default ForgotPasswordPage
