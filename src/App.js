import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Global styles
import GlobalStyle from '@styles/global';

// Utils
import asyncComponent from '@utils/AsyncComponent';

const GeneratorPage = asyncComponent(() => import(/* webpackChunkName: 'GeneratorPage' */ '@pages/GeneratorPage'));
const NotFound = asyncComponent(() => import(/* webpackChunkName: 'NotFound' */ '@pages/NotFound'));

class App extends Component {
  render() {
    return (
      <div id="app">
        <GlobalStyle />
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={GeneratorPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
