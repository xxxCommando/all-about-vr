import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { Layout } from 'antd';
import { withCookies, Cookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGa from 'react-ga';
import { fetchHeadsets } from './redux/headsets/actions';

import './app.scss';
import { HeadsetShape } from './shape';

import HeadsetList from './pages/headsetList';
import Header from './components/header';
import Footer from './components/footer';
import Page404 from './pages/page404/page404';
import Page500 from './pages/page500/page500';
import Headset from './pages/headset/headset';
import Construction from './pages/pageconstruction/construction';

const mapStateToProps = (state) => ({
  formatedHeadset: state.headsets.formatedHeadset,
  isLoaded: state.headsets.isLoaded,
  isFetching: state.headsets.isFetching,
  fatalError: state.headsets.fatalError,
});

const mapDispatchToProps = (dispatch) => ({
  doFetchHeadsets: () => dispatch(fetchHeadsets()),
});
class App extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      darkMode: cookies.get('all-about-vr-dark-mode') || false,
      mainClassName: ['App'],
    };
  }

  componentDidMount() {
    const { doFetchHeadsets } = this.props;
    const { darkMode } = this.state;
    doFetchHeadsets();
    document.body.classList = darkMode ? ['dark'] : ['light'];
    ReactGa.initialize(process.env.REACT_APP_GOOGLEANALYTICS);
    ReactGa.pageview(window.location.pathname + window.location.search);
  }

  toggleDarkMode() {
    const { cookies } = this.props;
    const { darkMode } = this.state;
    if (!darkMode) {
      cookies.set('all-about-vr-dark-mode', 'activate');
      document.body.classList = ['dark'];
    } else {
      cookies.remove('all-about-vr-dark-mode');
      document.body.classList = ['light'];
    }
    this.setState({ darkMode: !darkMode });
  }

  toggleClassName(className) {
    const { mainClassName } = this.state;
    if (mainClassName.includes(className)) {
      this.setState({ mainClassName: mainClassName.filter((item) => item !== className) });
    } else {
      this.setState({ mainClassName: [...mainClassName, className] });
    }
  }

  render() {
    const { formatedHeadset, isLoaded, fatalError } = this.props;
    const { darkMode, mainClassName } = this.state;

    return (
      <Router>
        <Layout className={mainClassName}>
          <Header toggleDarkMode={() => this.toggleDarkMode()} darkMode={darkMode} />
          <Layout.Content className="layout-content">
            {fatalError ? (
              <Page500 toggleClassName={(className) => this.toggleClassName(className)} />
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
                  <Construction />
                </Route>
                <Route path="/vr-games" exact>
                  <Construction />
                </Route>
                <Route path="/about" exact>
                  <Construction />
                </Route>
                <Route>
                  <Page404 toggleClassName={(className) => this.toggleClassName(className)} />
                </Route>
              </Switch>
            )}
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>
    );
  }
}

App.propTypes = {
  formatedHeadset: PropTypes.arrayOf(HeadsetShape).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  fatalError: PropTypes.bool.isRequired,
  doFetchHeadsets: PropTypes.func.isRequired,
  cookies: instanceOf(Cookies).isRequired,
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(App));
