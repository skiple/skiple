import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ListActivity from 'components/ListActivity'

class MainPage extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <Header />
          <ListActivity />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default MainPage
