import axios from 'axios';

const root = `${process.env.REACT_APP_APIURL}/games`;

export default class GamesApi {
  static async get() {
    try {
      const response = await axios.get(root);
      return response.data.data.games;
    } catch (error) {
      return error;
    }
  }
}
