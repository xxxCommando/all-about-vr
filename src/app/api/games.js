import { axios } from 'axios';

const root = `${process.env.REACT_APP_APIURL}/games`;

export default class GamesApi {
  static get() {
    return Promise.resolve([]);
    // return axios.get(root);
  }
}
