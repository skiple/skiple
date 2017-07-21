import { Component } from 'react';
import { connect } from "react-redux";

class DetailsActivity extends Component {
	constructor(props){
		super(props);
	}

	// componentDidMount(){
	// 	console.log(this.details.activity.activity_name);
	// }

	render() {
		return (
			<div>
			</div>
		);
	}
}

export default connect(state => ({ details: state.activity.data }))(DetailsActivity);