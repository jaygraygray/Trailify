import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import store from './ducks/store';

ReactDOM.render(
 <Provider store={store}>
    <Router>
      <div>
        <Route component={ Header }/>
        <Route exact path="/" component={ App }/>
        <Route component={ Footer }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
