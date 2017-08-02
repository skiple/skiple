import React, { Component } from 'react'

import Header from 'components/Header'
import DetailsActivity from 'components/DetailsActivity'

class DetailsActivityPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <DetailsActivity params={{ id: this.props.params.id }}/>
      </div>
    )
  }
}

export default DetailsActivityPage
