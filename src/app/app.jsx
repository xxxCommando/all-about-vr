import React from 'react';
import 'antd/dist/antd.css';
import './app.scss';
import * as firebase from 'firebase';
import HeadsetList from './components/headsetList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headsets: [],
    };
  }

  async componentDidMount() {
    const collection = await firebase.firestore().collection('headsets').get();
    this.setState({
      headsets: collection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })),
    });
  }

  render() {
    const { headsets } = this.state;
    return (
      <div className="App">
        <HeadsetList items={headsets} />
      </div>
    );
  }
}

export default App;
