import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import DetailsActivity from 'components/DetailsActivity'

class DetailsActivityPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <DetailsActivity params={{ id: this.props.params.id }}/>
        <Footer />
      </div>
    )
  }
}

export default DetailsActivityPage
