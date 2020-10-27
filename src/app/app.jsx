import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';

import './app.scss';
import { HeadsetShape } from './shape';

import HeadsetList from './pages/headsetList';
import Header from './components/header';
import Footer from './components/footer';
import Page404 from './pages/page404';
import Page500 from './pages/page500';
import Headset from './pages/headset';
import Construction from './pages/pageconstruction';
import Wiki from './pages/wiki';
import About from './pages/about';
import ScrollToTop from './components/scrollToTop';

class App extends React.Component {
  componentDidMount() {
    const { fetchHeadsets, darkMode } = this.props;
    fetchHeadsets();
    document.body.classList = darkMode ? ['dark'] : ['light'];
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor.setAttribute('content', !darkMode ? '#1890ff' : '#503D4D');
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(process.env.REACT_APP_GOOGLEANALYTICS);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    const { formatedHeadset, isLoaded, fatalError } = this.props;

    return (
      <Router>
        <ScrollToTop />
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
                component={({ match }) => (isLoaded ? (
                  <Headset
                    item={formatedHeadset.find((headset) => headset.id === match.params.id)}
                  />
                ) : null)}
              />
              <Route path="/headsets" exact>
                <Construction />
              </Route>
              <Route path="/wiki" exact>
                <Wiki />
              </Route>
              <Route path="/vr-games" exact>
                <Construction />
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
  formatedHeadset: PropTypes.arrayOf(HeadsetShape).isRequired,
  darkMode: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  fatalError: PropTypes.bool.isRequired,
  fetchHeadsets: PropTypes.func.isRequired,
};

export default App;
