import React, { Component } from 'react'

import Header from 'components/Header'
import ListActivity from 'components/ListActivity'

class MainPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <ListActivity />
      </div>
    )
  }
}

export default MainPage
