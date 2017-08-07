import React, { Component } from 'react'

import Header from 'components/Header'
import CheckOut from 'components/CheckOut'

class CheckOutPage extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <CheckOut />
      </div>
    )
  }
}

export default CheckOutPage
