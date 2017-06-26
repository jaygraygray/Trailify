import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import {unregister} from './registerServiceWorker';
import './index.css';

import store from './ducks/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import TrailResults from './components/TrailResults/TrailResults';
import TrailDetails from './components/TrailDetails/TrailDetails';
import UserLogin from './components/UserLogin/UserLogin';
import UserProfile from './components/UserProfile/UserProfile';
import About from './components/About/About';

ReactDOM.render(
 <Provider store={store}>
    <BrowserRouter>
      <div>
          <Route component={ Header }/>
        <Switch>
          <Route path="/results" component={ TrailResults } />
          <Route path="/details/:id" component={ TrailDetails } />
          <Route path="/login" component={ UserLogin } />
          <Route path="/profile" component={ UserProfile } />
          <Route path="/about" component={ About } />
          <Route path="/" component={ LandingPage }/>
        </Switch>
          <Route component={ Footer }/>
    </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
unregister()
