import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import App from "container/App";
import MainPage from "container/MainPage";

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" components={App}>
			<IndexRoute components={MainPage} />
		</Route>
	</Router>
);

export default Routes;
