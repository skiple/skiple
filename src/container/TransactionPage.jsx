import React, { Component } from 'react'

import Header from 'components/Header'
import Transaction from 'components/ListTransaction'

class TransactionPage extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Transaction />
      </div>
    )
  }
}

export default TransactionPage
