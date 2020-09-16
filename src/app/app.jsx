import React from 'react';
import { instanceOf } from 'prop-types';
import { Layout } from 'antd';
import { withCookies, Cookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';

import HeadsetService from './services/headset';
import HeadsetList from './pages/headsetList';
import Header from './components/header';
import Footer from './components/footer';
import HeadsetDetails from './components/headsetDetails';
import Page404 from './pages/page404/page404';
import Page500 from './pages/page500/page500';
import Headset from './pages/headset/headset';
import Construction from './pages/pageconstruction/construction';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      darkMode: cookies.get('all-about-vr-dark-mode') || false,
      headsetService: new HeadsetService(),
      fatalError: false,
      mainClassName: ['App'],
    };
  }

  async componentDidMount() {
    const { darkMode, headsetService } = this.state;
    document.body.classList = darkMode ? ['dark'] : ['light'];
    try {
      await headsetService.fetchHeadSetCollection();
      this.setState({
        headsetService,
      });
    } catch (error) {
      this.setState({
        fatalError: true,
      });
    }
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
    const {
      headsetService, darkMode, fatalError, mainClassName,
    } = this.state;

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
                  <HeadsetList items={headsetService.getFormatedHeadsets()} />
                </Route>
                <Route
                  path="/headset/:id"
                  component={({ match }) => (
                    <Headset item={headsetService.getFormatedHeadset(match.params.id)} />
                  )}
                />
                {/* <Route>
                  <Page404 toggleClassName={(className) => this.toggleClassName(className)} />
                </Route> */}
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
  cookies: instanceOf(Cookies).isRequired,
};

export default withCookies(App);
