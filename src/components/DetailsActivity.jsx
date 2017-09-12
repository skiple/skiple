import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActivity, selectedActivity } from 'actions/Activity'

import Modal from 'components/Modal'

const arrOfMounts = []
arrOfMounts['01'] = 'Januari'
arrOfMounts['02'] = 'Februari'
arrOfMounts['03'] = 'Maret'
arrOfMounts['04'] = 'April'
arrOfMounts['05'] = 'Mei'
arrOfMounts['06'] = 'Juni'
arrOfMounts['07'] = 'Juli'
arrOfMounts['08'] = 'Agustus'
arrOfMounts['09'] = 'September'
arrOfMounts['10'] = 'Oktober'
arrOfMounts['11'] = 'November'
arrOfMounts['12'] = 'Desember'

const arrOfMount = []
arrOfMount['01'] = 'Jan'
arrOfMount['02'] = 'Feb'
arrOfMount['03'] = 'Mar'
arrOfMount['04'] = 'Apr'
arrOfMount['05'] = 'Mei'
arrOfMount['07'] = 'Jul'
arrOfMount['08'] = 'Ags'
arrOfMount['09'] = 'Sep'
arrOfMount['06'] = 'Jun'
arrOfMount['10'] = 'Okt'
arrOfMount['11'] = 'Nov'
arrOfMount['12'] = 'Des'

class DetailsActivity extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      data: {},
      date: '',
      required: '',
      quantity: '',
      mainPhoto: '',
      secondPhoto: '',
      thirdPhoto: '',
      fourthPhoto: '',
      slot: '',
      over: false
    }

    this.handleModal = this.handleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.checkOut = this.checkOut.bind(this)
    this.changeInitialPhoto = this.changeInitialPhoto.bind(this)
  }

  componentDidMount () {
    this.props.getActivity(this.props.params.id)
      .then(() => {
        this.setState({ data: this.props.details.activity })
      })
  }

  componentWillUnmount () {
    this.setState(this.state)
  }

  handleModal () {
    $('#myModalTanggal').modal({ keyboard: true })
  }

  handleChange (e) {
    this.setState({ quantity: e.target.value })
  }

  changeInitialPhoto (e) {
    let img = this.img.src
    if (e.target.id === 'img1') {
      this.setState({ mainPhoto: e.target.src })
      this.setState({ secondPhoto: img })
    } else if (e.target.id === 'img2') {
      this.setState({ mainPhoto: e.target.src })
      this.setState({ thirdPhoto: img })
    } else {
      this.setState({ mainPhoto: e.target.src })
      this.setState({ fourthPhoto: img })
    }
  }

  convertPrice () {
    let price = this.state.data.price
    return Number(price).toLocaleString('de')
  }

  convertDateButton (startDate, endDate, duration) {
    let startDateSplit = startDate.split(' ')
    let newStartDate = startDateSplit[0].split('-')

    let endDateSplit = endDate.split(' ')
    let newEndDate = endDateSplit[0].split('-')

    if (duration === 1) {
      return `${newStartDate[2]} ${arrOfMounts[newStartDate[1]]} ${newStartDate[0]}`
    } else {
      return `${newStartDate[2]} ${arrOfMount[newStartDate[1]]} - ${newEndDate[2]} ${arrOfMount[newEndDate[1]]} ${newEndDate[0]}`
    }
  }

  convertDate (startDate, endDate, duration) {
    let startDateSplit = startDate.split(' ')
    let newStartDate = startDateSplit[0].split('-')

    let endDateSplit = endDate.split(' ')
    let newEndDate = endDateSplit[0].split('-')

    if (duration === 1) {
      return `${newStartDate[2]} ${arrOfMounts[newStartDate[1]]} ${newStartDate[0]}`
    } else {
      return `${newStartDate[2]} ${arrOfMounts[newStartDate[1]]} ${newStartDate[0]} - ${newEndDate[2]} ${arrOfMounts[newEndDate[1]]} ${newEndDate[0]}`
    }
  }

  convertTime (day, startTime, endTime, duration) {
    let newStartTime = startTime.substring(0, 5)
    let newEndTime = endTime.substring(0, 5)
    return (<span>Hari ke-{day} <span className="font-blue">{`${newStartTime} - ${newEndTime}`}</span></span>)
  }

  selectedDate (date) {
    $('#myModalTanggal').modal('hide')
    this.setState({
      date,
      slot: `Slot maksimal ${date.max_participants} orang, sekarang tersisa ${date.participant_left} orang`
    })
  }

  checkOut () {
    if (!this.state.date && !this.state.quantity) {
      this.setState({ required: 'Pilih tanggal dan input quantity' })
    } else if (!this.state.date) {
      this.setState({ required: 'Pilih tanggal' })
    } else if (!this.state.quantity) {
      this.setState({ required: 'Input quantity' })
    } else {
      if (!localStorage.getItem('token')) {
        if (this.state.quantity <= 0) {
          console.log('berhasil')
          this.setState({
            over: !this.state.over,
            slot: `Masukan quantity minimal 1`
          })
        } else if (this.state.quantity > this.state.date.participant_left) {
          this.setState({
            over: !this.state.over,
            slot: `Melebihi kapasitas! slot yang tersedia hanya ${this.state.date.participant_left}`
          })
        } else {
          $(findDOMNode(this.modal)).modal('show')
        }
      } else {
        if (this.state.quantity <= 0) {
          this.setState({
            over: !this.state.over,
            slot: `Masukan quantity minimal 1`
          })
        } else if (this.state.quantity > this.state.date.participant_left) {
          this.setState({
            over: !this.state.over,
            slot: `Melebihi kapasitas! slot yang tersedia hanya ${this.state.date.participant_left}`
          })
        } else {
          this.props.selectedActivity(this.props.details.activity, this.state.date, this.state.quantity)
          this.context.router.push('/checkout')
        }
      }
    }
  }

  renderListDate () {
    const { activity } = this.props.details

    return activity.dates.map(data => {
      let warningSlot = data.max_participants / 2
      let participantLeft = data.participant_left
      return (
        <li className="mb-4" key={data.id_activity_date}>
          {this.convertDate(data.date, data.date_to, activity.duration)}
          {participantLeft <= 0 ? <button className="btn btn-primary float-right disabled">Habis</button> : <button className="btn btn-primary float-right" onClick={() => this.selectedDate(data)}>Pilih</button>}
          <ul className="list-unstyled">
            {data.times.map(time => {
              return <li key={time.id_activity_time}>{this.convertTime(time.day, time.time_start, time.time_end, activity.duration)}</li>
            })}
          </ul>
          <p className={`small ${participantLeft < warningSlot ? 'text-danger' : ''}`}>Sisa Stock: {data.participant_left}</p>
        </li>
      )
    })
  }

  render () {
    if (!this.props.details.activity) { return (<div>loading...</div>) }
    return (
      <div>
        <div className="content activity-details">
          <div className="row">
            <div className="col-12 text-right mb-4">step 1 of 3</div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="image-content">
                <img className="img-fluid" src={this.state.mainPhoto ? this.state.mainPhoto : this.state.data.photo1} style={{ 'marginBottom': '30px' }} alt="" ref={e => this.img = e} />
                <div className="row">
                  <div className="col-4">
                    <img id="img1" className="img-fluid hvr-grow" src={this.state.secondPhoto ? this.state.secondPhoto : this.state.data.photo2} alt="" onClick={this.changeInitialPhoto} />
                  </div>
                  <div className="col-4">
                    <img id="img2" className="img-fluid hvr-grow" src={this.state.thirdPhoto ? this.state.thirdPhoto : this.state.data.photo3} alt="" onClick={this.changeInitialPhoto} />
                  </div>
                  <div className="col-4">
                    <img id="img3" className="img-fluid hvr-grow" src={this.state.fourthPhoto ? this.state.fourthPhoto : this.state.data.photo4} alt="" onClick={this.changeInitialPhoto} />
                  </div>
                </div>
              </div>
              <div className="body-content-left">
                <p className="header-list-left">{this.state.data.host_name}</p>
                <p className="font-grey">{this.state.data.host_profile}</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-12 col-lg-5">
              <div className="header-content">
                <h3>{this.state.data.activity_name}</h3>
                <p>oleh <span className="font-blue">{this.state.data.host_name}</span></p>
              </div>
              <div className="select-date">
                {/* <button className="btn btn-primary float-right btn-res-tog" onClick={this.handleModal}>{!this.state.date ? 'Tanggal' : this.convertDateButton(this.state.date.date, this.state.date.date_to, this.state.data.duration)}</button> */}
                <button className="btn btn-primary btn-res" onClick={this.handleModal}>{!this.state.date ? 'Pilih Tanggal' : this.convertDate(this.state.date.date, this.state.date.date_to, this.state.data.duration)}</button>
              </div>
              <div className="body-content">
                <p className="header-list">Detil Kegiatan</p>
                <p className="font-grey">{this.state.data.description}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Apa yang akan disediakan?</p>
                <p className="font-grey">{this.state.data.provide}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Dimana lokasi kegiatan?</p>
                <p className="font-grey">{this.state.data.location}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Agenda</p>
                <p className="font-grey">{this.state.data.itinerary}</p>
              </div>
              <small className="text-danger">{this.state.required}</small>
              <div className="slot-content">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="price">IDR {this.convertPrice()} <span>per orang</span></p>
                  </div>
                  <div className="col-lg-6">
                    <div className="quantity float-left">
                      <select className="form-control form-custom" onChange={this.handleChange}>
                        <option>-- org</option>
                        <option value="1">1 org</option>
                        <option value="2">2 org</option>
                        <option value="3">3 org</option>
                        <option value="4">4 org</option>
                        <option value="5">5 org</option>
                        <option value="6">6 org</option>
                        <option value="7">7 org</option>
                        <option value="8">8 org</option>
                        <option value="9">9 org</option>
                        <option value="10">10 org</option>
                        <option value="11">11 org</option>
                        <option value="12">12 org</option>
                        <option value="13">13 org</option>
                        <option value="14">14 org</option>
                        <option value="15">15 org</option>
                        <option value="16">16 org</option>
                        <option value="17">17 org</option>
                        <option value="18">18 org</option>
                        <option value="19">19 org</option>
                        <option value="20">20 org</option>
                      </select>
                    </div>
                    <button className="btn btn-primary float-right" onClick={this.checkOut}>Next</button>
                    <small className={`over ${this.state.over ? 'text-danger' : ''}`}>{this.state.slot}</small>
                    <small className={`over-res ${this.state.over ? 'text-danger' : ''}`}>{this.state.slot}</small>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="myModalTanggal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog cs-modal-login" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h1>Pilih Tanggal</h1>
                <ul className="list-unstyled">
                  {this.renderListDate()}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Modal ref={e => this.modal = e} params={{ id: 2, activity: this.state.data, date: this.state.date, quantity: this.state.quantity }} />
      </div>
    )
  }
}

export default connect((state) => ({ details: state.activity.details }), { getActivity, selectedActivity })(DetailsActivity)
