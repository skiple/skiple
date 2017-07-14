import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { browserHistory } from "react-router";
import promise from "redux-promise";
import Routes from "./routes";
import reducers from "./reducers";
import "./assets/scss";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Routes history={browserHistory} />
	</Provider>
	, document.getElementById('main'));
