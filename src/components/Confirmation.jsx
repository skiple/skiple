import React, { Component } from 'react'
import { connect } from 'react-redux'
import { paymentConfirmation } from 'actions/Transaction'
import { getPaymentMethod } from 'actions/Payment'
import moment from 'moment'

class Confirmation extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.getPaymentMethod()
  }

  handleSubmit (e) {
    e.preventDefault()
    let data = {
      account_name: this.name.value,
      from_bank: this.fromBank.value,
      phone: this.nomorHp.value,
      amount: this.amount.value,
      id_payment_method: this.id_payment_method.value,
      transfer_date: moment().format('YYYY-MM-DD'),
      id_transaction: this.props.params.id
    }

    this.props.paymentConfirmation(data)
      .then(() => {
        window.location.href = '/transaction'
      })
  }

  renderOptions () {
    const { payment } = this.props

    if (!payment.payment_methods) return (<option></option>)
    return payment.payment_methods.map((data) => {
      return (
        <option key={data.id_payment_method} value={data.id_payment_method}>{data.payment_method_name}</option>
      )
    })
  }

  render () {
    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>Konfirmasi Pembayaran</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="formNama">Nama</label>
                <input type="text" className="form-control" id="formNama" ref={e => this.name = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formNomorHp">Nomor Handphone</label>
                <input type="text" className="form-control" id="formNomorHp" ref={e => this.nomorHp = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formJumlahTransfer">Jumlah Transfer (beserta kode transaksi)</label>
                <input type="text" className="form-control" id="formJumlahTransfer" ref={e => this.amount = e} />
              </div>
              <div className="form-group">
                <label htmlFor="formDariBank">Dari Bank</label>
                <input type="text" className="form-control" id="formDariBank" ref={e => this.fromBank = e} />
              </div>
              <div className="form-group">
                <label htmlFor="toBank">Transfer ke Bank</label>
                <select className="form-control" id="toBank" ref={e => this.id_payment_method = e}>
                  {this.renderOptions()}
                </select>
              </div>
              <button type="submit" className="btn btn-primary float-right">Konfirmasi</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ payment: state.payment.all }), { getPaymentMethod, paymentConfirmation })(Confirmation)
