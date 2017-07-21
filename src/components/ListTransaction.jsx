import { Component } from "react";
import { connect } from "react-redux";
import { getAllTransaction } from "actions/Transaction";

class Transaction extends Component {
	componentDidMount() {
		this.props.getAllTransaction();
	}

	render() {
		if (!this.props.transaction) return (<div>Loading....</div>);
		return (
			<div className="content transaction">
				<div className="row">
					<div className="col-12">
						<h1>Transaction History</h1>
						<table className="table">
							<thead>
								<tr>
									<th>Transaction</th>
									<th>Activity</th>
									<th>Total</th>
									<th colSpan="2">Status</th>
								</tr>
							</thead>
							<tbody>
								{this.renderListTransaction()}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	};

	renderListTransaction() {
		const data = this.props.transaction.transactions;

		if (data.length == 0) {
			return (
				<tr>
					<th className="text-center" colSpan="4">Tidak ada transaksi</th>
				</tr>
			)
		} else {
			return data.map(res => {
				return (
					<tr key={res.id_transaction}>
						<td></td>
					</tr>
				)
			})
		}
	}
}

export default connect((state) => ({ transaction: state.transaction.data }), { getAllTransaction })(Transaction);