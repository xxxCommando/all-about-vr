import React from 'react';
import * as firebase from 'firebase';
import { Layout } from 'antd';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './app.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeadsetList from './pages/headsetList';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      headsetsRef: [],
      headsetsLoaded: false,
      darkMode: cookies.get('all-about-vr-dark-mode') || false,
    };
  }

  async componentDidMount() {
    const { darkMode } = this.state;
    document.body.classList = darkMode ? ['dark'] : ['light'];
    const collection = await firebase
      .firestore()
      .collection('headsets')
      .orderBy('index')
      .get();
    this.setState({
      headsetsRef: collection,
      headsetsLoaded: true,
    });
  }

  formatHeadset = (headsetsRef) => {
    const { headsetsLoaded } = this.state;
    return headsetsLoaded
      ? headsetsRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      : [];
  };

  toggleNightMode = () => {
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
  };

  render() {
    const { headsetsRef, darkMode } = this.state;
    return (
      <Layout className="App">
        <Router>
          <Header toggleNightMode={this.toggleNightMode} darkMode={darkMode} />
          <Layout.Content className="layout-content">
            <Switch>
              <Route path="/" exact>
                <HeadsetList items={this.formatHeadset(headsetsRef)} />
              </Route>
              {/* <Route path="/about" component={About} /> */}
            </Switch>
          </Layout.Content>
        </Router>
        <Footer />
      </Layout>
    );
  }
}

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
};

export default withCookies(App);
