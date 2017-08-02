import React, { Component } from 'react'

import Header from 'components/Header'
import Transaction from 'components/ListTransaction'

class TransactionPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <Transaction />
      </div>
    )
  }
}

export default TransactionPage
