import * as firebase from 'firebase';

class HeadsetService {
  constructor() {
    this.collectionRef = null;
    this.formatedHeadsets = [];
  }

  async fetchHeadSetCollection() {
    try {
      this.collectionRef = await firebase
        .firestore()
        .collection('headsets')
        .orderBy('index')
        .get();
      return true;
    } catch (error) {
      return error;
    }
  }

  formatHeadset = (doc) => ({
    id: doc.id,
    ...doc.data(),
  });

  formatHeadsets() {
    return this.collectionRef.docs.map((doc) => this.formatHeadset(doc));
  }

  getFormatedHeadsets() {
    if (!this.collectionRef) {
      return [];
    }
    if (this.formatedHeadsets.length === 0) {
      this.formatedHeadsets = this.formatHeadsets();
    }
    return this.formatedHeadsets;
  }

  getFormatedHeadset(id) {
    if (!this.collectionRef) {
      return {};
    }
    return this.formatHeadset(this.collectionRef.docs.find((headset) => headset.id === id));
  }
}

export default HeadsetService;
