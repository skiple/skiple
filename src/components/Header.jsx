import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'
import { signOut } from 'actions/User'
import { getAllTransaction } from 'actions/Transaction'

import Modal from './Modal'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: ''
    }

    this.showModal = this.showModal.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount () {
    if (localStorage.getItem('token')) {
      this.setState({ firstName: localStorage.getItem('firstName') })
      this.props.getAllTransaction()
    }
  }

  showModal () {
    $(findDOMNode(this.modal)).modal({ keyboard: true })
  }

  handleSignOut () {
    this.props.signOut()
      .then(() => {
        localStorage.clear()
        window.location.href = '/'
      })
  }

  getTotalTransaction () {
    const { transaction } = this.props
    let total = 0

    for (let i = 0; i < transaction.transactions.length; i++) {
      if (transaction.transactions[i].status === 0) {
        total += 1
      }
    }
    return total
  }

  render () {
    return (
      <div>
        <nav className="navs navbar navbar-toggleable-md navbar-light">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to={'/'}><img src="/src/assets/img/logo.png" width="230px" alt="" /></Link>
          <div className="collapse navbar-collapse text-center float-right" id="navbarSupportedContent">
            <ul className="nav-right">
              {!this.props.transaction
                ? <li className="nav-item"><Link className="nav-link" to={'/transaction'} activeClassName="active">Transaction(0)</Link></li>
                : <li className="nav-item"><Link className="nav-link" to={'/transaction'} activeClassName="active">Transaction({this.getTotalTransaction()})</Link></li>}
              {!this.state.firstName
                ? <li className="nav-item nav-link" onClick={this.showModal}>Log In</li>
                : <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.firstName}
                  </a>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to={'/editprofile'}>Edit profile</Link>
                    <Link className="dropdown-item" to={''} onClick={this.handleSignOut}>Log out</Link>
                  </div>
                </li>}
            </ul>
          </div>
          <div className="clearfix"></div>
          <Modal ref={e => this.modal = e} params={{ id: 1 }}/>
        </nav>
        <div className="navs-border"></div>
        {/* <nav className="navs">
          <div className="float-left">
            <Link to={'/'}><img src="/src/assets/img/logo.png" width="230px" alt="" /></Link>
          </div>
          <div className="float-right">
            <ul className="nav-right">
              {!this.props.transaction
                ? <li className="nav-item"><Link className="nav-link" to={'/transaction'} activeClassName="active">Transaction(0)</Link></li>
                : <li className="nav-item"><Link className="nav-link" to={'/transaction'} activeClassName="active">Transaction({this.getTotalTransaction()})</Link></li>}
              {!this.state.firstName
                ? <li className="nav-item nav-link" onClick={this.showModal}>Log In</li>
                : <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.firstName}
                  </a>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to={'/editprofile'}>Edit profile</Link>
                    <Link className="dropdown-item" to={''} onClick={this.handleSignOut}>Log out</Link>
                  </div>
                </li>}
            </ul>
          </div>
          <div className="clearfix"></div>
          <div className="navs-border"></div>
          <Modal ref={e => this.modal = e} params={{ id: 1 }}/>
        </nav> */}
      </div>
    )
  }
}

export default connect((state) => ({ transaction: state.transaction.data }), { signOut, getAllTransaction })(Header)
