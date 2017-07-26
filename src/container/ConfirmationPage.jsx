import React, { Component } from 'react'

import Confirmation from 'components/Confirmation'

class ConfirmationPage extends Component {
  render () {
    return (
      <div>
        <Confirmation params={{ id: this.props.params.id }}/>
      </div>
    )
  }
}

export default ConfirmationPage
