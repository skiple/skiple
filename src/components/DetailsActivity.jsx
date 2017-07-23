import { Component } from 'react';
import { connect } from "react-redux";
import { getActivity } from "actions/Activity";

class DetailsActivity extends Component {
	componentDidMount() {
		this.props.getActivity(this.props.params.id);
	}

	render() {
		const { details } = this.props;

		if (!details) { return (<div>loading...</div>) }
		return (
			<div className="content activity-details">
				<div className="row">
					<div className="col-12 col-lg-6">
						<div className="header-content">
							<h3>{details.activity.activity_name}</h3>
							<p>oleh <span className="font-blue">{details.activity.host_name}</span></p>
						</div>
						<div className="body-content">
							<p className="header-list">Detail Kegiatan</p>
							<p>{details.activity.description}</p>
						</div>
						<div className="body-content">
							<p className="header-list">Siapa {details.activity.host_name}?</p>
							<p>{details.activity.host_profile}</p>
						</div>
						<div className="body-content">
							<p className="header-list">Apa yang akan disediakan?</p>
							<p>{details.activity.provide}</p>
						</div>
						<div className="body-content">
							<p className="header-list">Dimana lokasi kegiatan?</p>
							<p>{details.activity.location}</p>
						</div>
						<div className="body-content">
							<p className="header-list">Itenerary</p>
							<p>{details.activity.itinerary}</p>
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
							<p>Silahkan pilih tanggal</p>
							<p>IDR {details.activity.price}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({ details: state.activity.details.data }), { getActivity })(DetailsActivity);