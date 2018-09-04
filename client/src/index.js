import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import store from './store';

import App from './app';
import FrontPage from './components/front-page';
import UserPage from './components/user-page';
import ProductPage from './components/product-page';
import UserLogin from './components/user-login';
import UserAccountNew from './components/user-account-new';
import UserAccountEdit from './components/user-account-edit';
import UserAccountFirst from './components/user-account-first';


ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div className='wrapper'>
        <App /> 
        <Switch>
          <Route path='/login' component={UserLogin} />
          <Route path='/signup' component={UserAccountNew} />
          <Route path='/account-edit' component={UserAccountEdit} />
          <Route path='/account-create' component={UserAccountFirst} />
          <Route path='/user/:id' component={UserPage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/' component={FrontPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
