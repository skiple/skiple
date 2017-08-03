import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Transaction from 'components/ListTransaction'

class TransactionPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <Transaction />
        <Footer />
      </div>
    )
  }
}

export default TransactionPage
