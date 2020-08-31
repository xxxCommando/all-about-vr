import React from 'react';
import * as firebase from 'firebase';
import { Layout } from 'antd';

import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeadsetList from './pages/headsetList';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headsetsRef: [],
      headsetsLoaded: false,
      darkMode: false,
    };
  }

  async componentDidMount() {
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
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode });
  }

  render() {
    const { headsetsRef, darkMode } = this.state;
    return (
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <Layout>
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
      </div>
    );
  }
}

export default App;
