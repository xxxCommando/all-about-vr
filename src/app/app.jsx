import React from "react";
import * as firebase from "firebase";
import { Layout } from "antd";

import "antd/dist/antd.css";
import "./app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeadsetList from "./components/headsetList";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./views/home/home";
import About from "./views/about/about";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headsetsRef: [],
      headsetsLoaded: false,
    };
  }

  async componentDidMount() {
    const collection = await firebase
      .firestore()
      .collection("headsets")
      .orderBy("index")
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

  render() {
    const { headsetsRef } = this.state;
    return (
      <Layout>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>

        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100%",
          }}
        >
          <HeadsetList items={this.formatHeadset(headsetsRef)} />
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;
