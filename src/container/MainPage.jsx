import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ListActivity from 'components/ListActivity'

class MainPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <ListActivity />
        <Footer />
      </div>
    )
  }
}

export default MainPage
