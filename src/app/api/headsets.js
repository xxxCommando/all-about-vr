import { axios } from 'axios';

const root = `${process.env.REACT_APP_APIURL}/headsets`;

export default class HeadsetsApi {
  static get() {
    return Promise.resolve([]);
    // return axios.get(root);
  }
}
