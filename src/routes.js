import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from 'container/App'
import MainPage from 'container/MainPage'
import TransactionPage from 'container/TransactionPage'
import DetailsActivityPage from 'container/DetailsActivityPage'
import CheckOutPage from 'container/CheckOutPage'
import ConfirmationPage from 'container/ConfirmationPage'
import EditProfilePage from 'container/EditProfilePage'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" components={App}>
      <IndexRoute components={MainPage} />
      <Route path="/transaction" components={TransactionPage} />
      <Route path="/checkout" components={CheckOutPage} />
      <Route path="/activity/:id" components={DetailsActivityPage}/>
      <Route path="/confirmation/:id" components={ConfirmationPage}/>
      <Route path="/editprofile" components={EditProfilePage}/>
    </Route>
  </Router>
)

export default Routes
