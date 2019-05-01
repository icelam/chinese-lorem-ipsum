import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

//Utils
import detectColorScheme from '@utils/detectColorScheme';

// Global styles
import GlobalStyle from '@styles/global';
import themes from '@styles/themes';

// Loading Screen
import Loading from '@components/Loading';

const GeneratorPage = lazy(() => import(/* webpackChunkName: 'GeneratorPage' */ '@pages/GeneratorPage'));
const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */ '@pages/NotFound'));

const themeTone = detectColorScheme();

const App = () => (
  <div id="app">
    <ThemeProvider theme={themes[themeTone]}>
      <div>
        <GlobalStyle />

        <Router history={createBrowserHistory()}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={GeneratorPage} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  </div>
);

export default App;
