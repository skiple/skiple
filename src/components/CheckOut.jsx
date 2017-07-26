import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNewTransaction } from 'actions/Transaction'

const arrOfMount = []
arrOfMount['01'] = 'Januari'
arrOfMount['02'] = 'Februari'
arrOfMount['03'] = 'Maret'
arrOfMount['04'] = 'April'
arrOfMount['05'] = 'Mei'
arrOfMount['06'] = 'Juni'
arrOfMount['07'] = 'Juli'
arrOfMount['08'] = 'Agustus'
arrOfMount['09'] = 'September'
arrOfMount['10'] = 'Oktober'
arrOfMount['11'] = 'November'
arrOfMount['12'] = 'Desember'

class CheckOut extends Component {
  constructor (props) {
    super(props)

    this.checkOut = this.checkOut.bind(this)
  }

  convertDate (date) {
    let dateSplit = date.split(' ')
    let newDate = dateSplit[0].split('-')
    return `${newDate[2]} ${arrOfMount[newDate[1]]} ${newDate[0]}`
  }

  convertTime (startTime, endTime) {
    let newStartTime = startTime.substring(0, 5)
    let newEndTime = endTime.substring(0, 5)
    return `${newStartTime} - ${newEndTime}`
  }

  checkOut (quantity, date, idActivity) {
    this.props.createNewTransaction(quantity, date, idActivity)
      .then(() => {
        this.context.router.push('/')
      })
  }

  render () {
    const { selected, dates, quantity } = this.props

    return (
      <div className="content">
        <div className="row align-items-center" style={{ 'borderBottom': '2px solid #bfbfbf' }}>
          <div className="col-2">
            <img className="img-fluid mb-4" src="/src/assets/img/2.png" alt=""/>
          </div>
          <div className="col-5">
            <h2>{selected.activity_name}</h2>
            <p>oleh <span className="font-blue">{selected.host_name}</span></p>
            <p>{this.convertDate(dates.date)}, {this.convertTime(dates.times[0].time_start, dates.times[0].time_end)}</p>
          </div>
          <div className="col-3">Guest<br/><br/>{quantity}</div>
          <div className="col-2">Price<br/><br/>IDR {selected.price}</div>
        </div>
        <div className="row mt-4" style={{ 'borderBottom': '2px solid #bfbfbf' }}>
          <div className="col-3 mb-4"><input type="text" className="form-control" placeholder="Have a Magic Coupon?"/></div>
          <div className="col-4"><button className="btn btn-primary">Apply</button></div>
          <div className="col-3 pt-2">Total</div>
          <div className="col-2 pt-2">IDR {selected.price * quantity}</div>
        </div>
        <div className="col-12 text-right mt-4">
          <button className="btn btn-primary" onClick={() => this.checkOut(quantity, dates.id_activity_date, selected.id_activity)}>Place Order</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selected: state.activity.selected,
    dates: state.activity.dates,
    quantity: state.activity.quantity
  }
}

CheckOut.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps, { createNewTransaction })(CheckOut)
