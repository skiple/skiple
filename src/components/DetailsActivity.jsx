import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getActivity } from 'actions/Activity'

class DetailsActivity extends PureComponent {
  componentDidMount () {
    this.props.getActivity(this.props.params.id)
  }

  render () {
    const { activity } = this.props.details

    if (!activity) { return (<div>loading...</div>) }
    return (
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
                <button className="btn btn-primary float-right">Tanggal</button>
                <div className="clearfix"></div>
              </div>
              <div className="quantity">
                <p className="float-left">IDR {activity.price}</p>
                <input type="number" className="form-control float-right" placeholder="QTY"/>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="slot-content">
              <small>Slot Maksimal 10 orang, sekarang tersisa </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ details: state.activity.details }), { getActivity })(DetailsActivity)
