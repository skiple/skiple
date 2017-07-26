import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getActivity, selectedActivity } from 'actions/Activity'

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

    this.state = { date: '' }

    this.handleModal = this.handleModal.bind(this)
  }

  componentDidMount () {
    this.props.getActivity(this.props.params.id)
  }

  handleModal () {
    $('#myModal').modal({ keyboard: true })
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
    $('#myModal').modal('hide')
    this.setState({ date: date })
  }

  renderListDate () {
    const { activity } = this.props.details

    return activity.dates.map(data => {
      return (
        <li className="mb-3" key={data.id_activity_date}>
          {this.convertDate(data.date)}
          <ul className="list-unstyled">
            {data.times.map(time => {
              return <li key={time.id_activity_time}>{this.convertTime(time.time_start, time.time_end)}</li>
            })}
          </ul>
          <button className="btn btn-primary float-right" onClick={() => this.selectedDate(data)}>Pilih</button>
          <div className="clearfix"></div>
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
            <div className="col-12 col-lg-6">
              <div className="header-content">
                <h3>{activity.activity_name}</h3>
                <p>oleh <span className="font-blue">{activity.host_name}</span></p>
              </div>
              <div className="body-content">
                <p className="header-list">Detail Kegiatan</p>
                <p>{activity.description}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Siapa {activity.host_name}?</p>
                <p>{activity.host_profile}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Apa yang akan disediakan?</p>
                <p>{activity.provide}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Dimana lokasi kegiatan?</p>
                <p>{activity.location}</p>
              </div>
              <div className="body-content">
                <p className="header-list">Itenerary</p>
                <p>{activity.itinerary}</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img className="img-fluid mb-4" src="/src/assets/img/2.png" alt="" />
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
                  <input type="number" className="form-control float-right" placeholder="QTY" ref={e => this.quantity = e}/>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="slot-content">
                <small className="float-left" style={{ 'paddingTop': '10px' }}>Slot Maksimal 10 orang, sekarang tersisa </small>
                <Link className="float-right btn btn-primary" to={'/checkout'} onClick={() => this.props.selectedActivity(activity, this.state.date, this.quantity.value)}>Next</Link>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog cs-modal-login" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <ul className="list-unstyled">
                  {this.renderListDate()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    details: state.activity.details,
    time: state.activity.time
  }
}

export default connect(mapStateToProps, { getActivity, selectedActivity })(DetailsActivity)
