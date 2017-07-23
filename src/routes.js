import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import App from "container/App";
import MainPage from "container/MainPage";
import TransactionPage from "container/TransactionPage";
import DetailsActivityPage from "container/DetailsActivityPage";

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" components={ App }>
			<IndexRoute components={ MainPage } />
			<Route path="transaction" components={ TransactionPage } />
			<Route path="activity/:id" components={ DetailsActivityPage }/>
		</Route>
	</Router>
);

export default Routes;
