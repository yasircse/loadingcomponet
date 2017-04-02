import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import HeaderFooter from './component/partialcomponent/HeaderFooter';
import Login from './component/generalcomponent/login';
import Logout from './component/generalcomponent/logout';
import Dashboard from './component/generalcomponent/Dashboard';
import Page1 from './component/generalcomponent/page1';
import Page2 from './component/generalcomponent/page2';

import './index.css';
import {Router, browserHistory, Route, IndexRedirect} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRedirect to='/login'/>
    <Route path='/headerfooter' component={HeaderFooter}>
    <Route path='/login' component={Login} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/page1' component={Page1} />
    <Route path='/page2' component={Page2} />
    <Route path='/logout' component={Logout} />
    </Route>
  </Route>
  </Router>,
  document.getElementById('root')
);
