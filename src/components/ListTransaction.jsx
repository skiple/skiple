import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getAllTransaction } from 'actions/Transaction'

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

class Transaction extends Component {
  componentDidMount () {
    this.props.getAllTransaction()
  }

  convertDate (date) {
    let dateSplit = date.split(' ')
    let newDate = dateSplit[0].split('-')
    let newTime = dateSplit[1].substring(0, 5)
    let strDate = `${newDate[2]} ${arrOfMount[newDate[1]]} ${newDate[0]}, ${newTime}`
    return strDate
  }

  convertStatus (status) {
    switch (status) {
      case 0:
        return 'Belum Bayar'
      case 1:
        return 'Menunggu Konfirmasi'
      case 2:
        return 'Sudah Bayar'
      case 3:
        return 'Selesai'
      default:
        return 'Batal'
    }
  }

  renderButton (status, id) {
    if (status === 0) {
      return (<button className="btn btn-primary"><Link to={`/confirmation/${id}`}>Konfirmasi</Link></button>)
    } else if (status === 1) {
      return (<button className="btn btn-primary" disabled>Konfirmasi</button>)
    }
  }

  renderListTransaction () {
    const { transaction } = this.props

    if (transaction.transactions.length === 0) {
      return (
        <tr>
          <th className="text-center" colSpan="4">Tidak ada transaksi</th>
        </tr>
      )
    } else {
      return transaction.transactions.map(data => {
        return (
          <tr key={data.id_transaction}>
            <td>
              ID Transaksi <span className="font-blue">{data.id_transaction}</span><br />
              {this.convertDate(data.created_at)}
            </td>
            <td>{data.activity.activity_name}</td>
            <td>{data.total_price}</td>
            <td>{this.convertStatus(data.status)}</td>
            <td>{this.renderButton(data.status, data.id_transaction)}</td>
          </tr>
        )
      })
    }
  }

  render () {
    if (!this.props.transaction) return (<div>Loading....</div>)
    return (
      <div className="content transaction">
        <div className="row">
          <div className="col-12">
            <h1>Transaction History</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Transaction</th>
                  <th>Activity</th>
                  <th>Total</th>
                  <th colSpan="2">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.renderListTransaction()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ transaction: state.transaction.data }), { getAllTransaction })(Transaction)
