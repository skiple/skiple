import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getAllActivities } from 'actions/Activity'

class ListActivity extends Component {
  componentDidMount () {
    this.props.getAllActivities()
  }

  renderListActivity () {
    const { activities } = this.props.activity

    return activities.map((data) => {
      return (
        <div className="col-lg-4" key={data.id_activity}>
          <Link to={`/activity/${data.id_activity}`}><img className="img-fluid" src={data.photo1} alt="" /></Link>
          <div className="caption">
            <h3>{data.activity_name}</h3>
            <p style={{ 'marginBottom': '5px', 'fontSize': '11pt' }}>oleh <span className="font-blue">{data.host_name}</span></p>
            <p>Rp {data.price}</p>
          </div>
        </div>
        // <div className="col-lg-4 col-img" key={data.id_activity}>
        //   <Link to={`/activity/${data.id_activity}`}><img className="img-fluid" src={data.photo1} alt="" /></Link>
        //   <div className="caption">
        //     <h3>{data.activity_name}</h3>
        //     <p style={{ 'marginBottom': '8px' }}>oleh <span className="font-blue">{data.host_name}</span></p>
        //     <p>Rp {data.price}</p>
        //   </div>
        // </div>
      )
    })
  }

  render () {
    if (!this.props.activity.activities) { return (<div>Loading....</div>) }
    return (
      <div className="content">
        <h5>Upcoming Unique Activities</h5>
        <div className="navs-border"></div>
        <div className="row">
          {this.renderListActivity()}
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ activity: state.activity.all }), { getAllActivities })(ListActivity)
