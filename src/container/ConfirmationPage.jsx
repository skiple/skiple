import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Confirmation from 'components/Confirmation'

class ConfirmationPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <Confirmation params={{ id: this.props.params.id }}/>
        <Footer />
      </div>
    )
  }
}

export default ConfirmationPage
