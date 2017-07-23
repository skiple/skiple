import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { getAllActivities } from "actions/Activity";

class ListActivity extends Component {
	componentDidMount() {
		this.props.getAllActivities();
	}

	renderListActivity() {
		return this.props.activity.activities.map((data) => {
			return (
				<div className="col-4" key={data.id_activity}>
					<Link to={`activity/${data.id_activity}`}><img className="img-fluid" src="/src/assets/img/1.png" alt="" /></Link>
					<div className="caption">
						<h3>{data.activity_name}</h3>
						<p>oleh {data.host_name}</p>
					</div>
				</div>
			)
		})
	}

	render() {
		if (!this.props.activity) { return (<div>Loading....</div>); }
		return (
			<div className="content">
				<div className="row">
					  {this.renderListActivity()}  
				</div>
			</div>
		)
	}
}

export default connect((state) => ({ activity: state.activity.all.data }), { getAllActivities })(ListActivity);
