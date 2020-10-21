import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';

import './app.scss';
import { HeadsetShape, GameShape } from './shape';

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

class App extends React.Component {
  componentDidMount() {
    const { fetchHeadsets, fetchGames, darkMode } = this.props;
    fetchHeadsets();
    fetchGames();
    document.body.classList = darkMode ? ['dark'] : ['light'];
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor.setAttribute('content', !darkMode ? '#1890ff' : '#503D4D');
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(process.env.REACT_APP_GOOGLEANALYTICS);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    const {
      formatedHeadset, formatedGame, isLoaded, fatalError,
    } = this.props;

    return (
      <Router>
        <Layout className="App">
          <Header />
            {fatalError ? (
              <Page500 />
            ) : (
              <Switch>
                <Route path="/" exact>
                  <HeadsetList items={formatedHeadset} />
                </Route>
                <Route
                  path="/headset/:id"
                  // component={({ match }) => (isLoaded ? (
                  //   <Headset
                  //     item={formatedHeadset.find((headset) => headset.id === match.params.id)}
                  //   />
                  // ) : null)}
                >
                  <Construction />
                </Route>
                <Route path="/headsets" exact>
                  <Construction />
                </Route>
                <Route path="/wiki" exact>
                  <Construction />
                </Route>
                <Route path="/vr-games" exact>
                  <Games items={formatedGame} />
                </Route>
                <Route path="/about" exact>
                  <Construction />
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
  formatedHeadset: PropTypes.arrayOf(HeadsetShape).isRequired,
  formatedGame: PropTypes.arrayOf(GameShape).isRequired,
  darkMode: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  fatalError: PropTypes.bool.isRequired,
  fetchHeadsets: PropTypes.func.isRequired,
  fetchGames: PropTypes.func.isRequired,
};

export default App;
