import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
// import promise from 'redux-promise'
import Routes from './routes'
import reducers from './reducers'
import './assets/scss'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes history={browserHistory} />
  </Provider>
  , document.getElementById('main'))
