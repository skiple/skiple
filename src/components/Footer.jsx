import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="container">
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', marginBottom: '10px' }}></div>
          <div className="float-left">
            <span>&copy; 2017 Rentuff. All Rights Reserved</span>
          </div>
          <div className="float-right">
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

export default Footer
