import React, { Component } from 'react'

import Header from 'components/Header'
import Confirmation from 'components/Confirmation'

class ConfirmationPage extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Confirmation params={{ id: this.props.params.id }}/>
      </div>
    )
  }
}

export default ConfirmationPage
