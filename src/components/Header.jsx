import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'
import { signOut } from 'actions/User'

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
    this.setState({ firstName: localStorage.getItem('firstName') })
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

  render () {
    return (
      <div>
        <nav className="navs">
          <div className="float-left">
            <Link to={'/'}><img src="/src/assets/img/logo.png" width="230px" alt="" /></Link>
          </div>
          <div className="float-right">
            <ul className="nav-right">
              <li className="nav-item"><Link className="nav-link" to={''}>About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to={'/transaction'}>Transaction(0)</Link></li>
              {
                !this.state.firstName
                  ? <li className="nav-item nav-link" onClick={this.showModal}>Log In</li>
                  : <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.firstName}
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to={''}>Edit profile</Link>
                      <Link className="dropdown-item" to={''} onClick={this.handleSignOut}>Log out</Link>
                    </div>
                  </li>
              }
            </ul>
          </div>
          <div className="clearfix"></div>
          <div className="navs-border"></div>
          <Modal ref={e => this.modal = e} />
        </nav>
      </div>
    )
  }
}

export default connect(null, { signOut })(Header)
