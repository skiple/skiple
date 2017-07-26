import React, { Component } from 'react'
import { connect } from 'react-redux'
import { paymentConfirmation } from 'actions/Transaction'
import moment from 'moment'

class Confirmation extends Component {
  constructor (props) {
    super(props)

    this.state = { selectedOption: '' }

    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOptionChange (e) {
    this.setState({ selectedOption: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    let data = {
      account_name: this.name.value,
      from_bank: this.fromBank.value,
      phone: this.nomorHp.value,
      amount: this.amount.value,
      bank: this.state.selectedOption,
      transfer_date: moment().format('YYYY-MM-DD'),
      id_transaction: this.props.params.id
    }

    this.props.paymentConfirmation(data)
      .then(() => {
        window.location.href = '/transaction'
      })
  }

  render () {
    return (
      <div className="content confirmation">
        <div className="row">
          <div className="col-6">
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
              <fieldset className="form-group">
                <h6>Metode Bayar Bank Transfer</h6>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="mandiri">
                    <input type="radio" className="form-check-input" value="mandiri" id="mandiri"
                      checked={this.state.selectedOption === 'mandiri'}
                      onChange={this.handleOptionChange} /> Mandiri
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="bca">
                    <input type="radio" className="form-check-input" value="bca" id="bca"
                      checked={this.state.selectedOption === 'bca'}
                      onChange={this.handleOptionChange} /> BCA
                  </label>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-primary float-right">Konfirmasi</button>
              <div className="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { paymentConfirmation })(Confirmation)
