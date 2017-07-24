import React, { Component } from 'react'

import DetailsActivity from 'components/DetailsActivity'

class DetailsActivityPage extends Component {
  render () {
    return (
      <div>
        <DetailsActivity params={{ id: this.props.params.id }}/>
      </div>
    )
  }
}

export default DetailsActivityPage
