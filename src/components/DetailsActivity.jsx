import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActivity, selectedActivity } from 'actions/Activity'

import Modal from 'components/Modal'

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

class DetailsActivity extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      date: '',
      required: '',
      quantity: ''
    }

    this.handleModal = this.handleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.checkOut = this.checkOut.bind(this)
  }

  componentDidMount () {
    this.props.getActivity(this.props.params.id)
  }

  handleModal () {
    $('#myModalTanggal').modal({ keyboard: true })
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({ quantity: e.target.value })
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

  selectedDate (date) {
    $('#myModalTanggal').modal('hide')
    this.setState({ date: date })
  }

  checkOut () {
    if (!this.state.date && !this.state.quantity) {
      this.setState({ required: 'pilih tanggal dan input quantity' })
    } else if (!this.state.date) {
      this.setState({ required: 'pilih tanggal' })
    } else if (!this.state.quantity) {
      this.setState({ required: 'input quality' })
    } else {
      if (!localStorage.getItem('token')) {
        $(findDOMNode(this.modal)).modal('show')
      } else {
        this.props.selectedActivity(this.props.details.activity, this.state.date, this.state.quantity)
        this.context.router.push('/checkout')
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
          {this.convertDate(data.date)}
          <button className="btn btn-primary float-right" onClick={() => this.selectedDate(data)}>Pilih</button>
          <ul className="list-unstyled">
            {data.times.map(time => {
              return <li key={time.id_activity_time}>{this.convertTime(time.time_start, time.time_end)}</li>
            })}
          </ul>
          <p className={`small ${participantLeft < warningSlot ? 'text-danger' : ''}`}>Sisa Stock: {data.participant_left}</p>
        </li>
      )
    })
  }

  render () {
    const { activity } = this.props.details

    if (!activity) { return (<div>loading...</div>) }
    return (
      <div>
        <div className="content activity-details">
          <div className="row">
            <div className="col-12 text-right mb-4">step 1 of 3</div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="header-content">
                <h3>{activity.activity_name}</h3>
                <p>oleh <span className="font-blue">{activity.host_name}</span></p>
              </div>
              <div className="body-content">
                <p className="header-list">Detil Kegiatan</p>
                <p className="font-grey">{activity.description}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Siapa {activity.host_name}?</p>
                <p className="font-grey">{activity.host_profile}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Apa yang akan disediakan?</p>
                <p className="font-grey">{activity.provide}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Dimana lokasi kegiatan?</p>
                <p className="font-grey">{activity.location}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Itinerary</p>
                <p className="font-grey">{activity.itinerary}</p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-12 col-lg-5">
              <img className="img-fluid" src="/src/assets/img/2.png" style={{ 'marginBottom': '30px' }} alt="" />
              <div className="row">
                <div className="col-4">
                  <img className="img-fluid" src="/src/assets/img/2.png" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid" src="/src/assets/img/2.png" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid" src="/src/assets/img/2.png" alt="" />
                </div>
              </div>
              <div className="order-content">
                <div className="select-date">
                  <p className="float-left">Silahkan pilih tanggal</p>
                  <button className="btn btn-primary float-right" onClick={this.handleModal}>{!this.state.date ? 'Tanggal' : this.convertDate(this.state.date.date) }</button>
                  <div className="clearfix"></div>
                </div>
                <div className="quantity">
                  <p className="float-left">IDR {activity.price}</p>
                  <input type="text" className="form-control float-right" placeholder="QTY" onChange={this.handleChange}/>
                  <div className="clearfix"></div>
                </div>
              </div>
              <small>{this.state.required}</small>
              <div className="slot-content">
                <small className="float-left" style={{ 'paddingTop': '10px' }}>Slot Maksimal 10 orang, sekarang tersisa </small>
                <button className="float-right btn btn-primary" onClick={this.checkOut}>Next</button>
                <div className="clearfix"></div>
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
        <Modal ref={e => this.modal = e} params={{ id: 2, activity, date: this.state.date, quantity: this.state.quantity }}/>
      </div>
    )
  }
}

DetailsActivity.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps (state) {
  return {
    details: state.activity.details,
    time: state.activity.time
  }
}

export default connect(mapStateToProps, { getActivity, selectedActivity })(DetailsActivity)
