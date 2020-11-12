import axios from 'axios';

const root = `${process.env.REACT_APP_APIURL}/headsets`;

export default class HeadsetsApi {
  static async get() {
    try {
      const response = await axios.get(root);
      return response.data.data.headsets;
    } catch (error) {
      return error;
    }
  }
}
