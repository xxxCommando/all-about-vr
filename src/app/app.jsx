import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';

import './app.scss';

import HeadsetList from './pages/headsetList';
import Header from './components/header';
import Footer from './components/footer';
import Page404 from './pages/page404';
import Page500 from './pages/page500';
import Headset from './pages/headset';
import Games from './pages/games';
import Construction from './pages/pageconstruction';
import Wiki from './pages/wiki';
import About from './pages/about';
import HeadsetsTab from './pages/headsetsTab';

class App extends React.Component {
  componentDidMount() {
    const { fetchHeadsets, fetchGames, darkMode } = this.props;
    fetchHeadsets();
    fetchGames();
    document.body.classList = darkMode ? ['dark'] : [];
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor.setAttribute('content', !darkMode ? '#1890ff' : '#503D4D');
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(process.env.REACT_APP_GOOGLEANALYTICS);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    const {
      isLoaded, fatalError, fatalErrorGame,
    } = this.props;

    return (
      <Router>
        <Layout className="App">
          <Header />
          {fatalError || fatalErrorGame ? (
            <Page500 />
          ) : (
            <Switch>
              <Route path="/" exact>
                <HeadsetList />
              </Route>
              <Route
                path="/headset/:id"
              >
                <Construction />
              </Route>
              <Route path="/headsets" exact>
                <HeadsetsTab />
              </Route>
              <Route path="/wiki" exact>
                <Wiki />
              </Route>
              <Route path="/vr-games" exact>
                <Games />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route>
                <Page404 />
              </Route>
            </Switch>
          )}
          <Footer />
        </Layout>
      </Router>
    );
  }
}

App.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  fatalError: PropTypes.bool.isRequired,
  fatalErrorGame: PropTypes.bool.isRequired,
  fetchHeadsets: PropTypes.func.isRequired,
  fetchGames: PropTypes.func.isRequired,
};

export default App;
