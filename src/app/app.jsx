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

class App extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      darkMode: cookies.get('all-about-vr-dark-mode') || false,
      headsetService: new HeadsetService(),
      fatalError: false,
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

  render() {
    const { headsetService, darkMode, fatalError } = this.state;

    return (
      <Router>
        <Layout className="App">
          <Header toggleDarkMode={this.toggleDarkMode} darkMode={darkMode} />
          <Layout.Content className="layout-content">
            {fatalError ? (
              <div>error 500 ici</div>
            ) : (
              <Switch>
                <Route path="/" exact>
                  <HeadsetList items={headsetService.getFormatedHeadsets()} />
                </Route>
                <Route
                  path="/headsets/:id"
                  component={({ match }) => (
                    <HeadsetDetails item={headsetService.getFormatedHeadset(match.params.id)} />
                  )}
                />
                <Route>
                  <div>404 ici</div>
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
