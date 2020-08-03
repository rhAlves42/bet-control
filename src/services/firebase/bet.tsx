import firebase from 'gatsby-plugin-firebase';
import _map from 'lodash/map';

class Bet {
  app = firebase.app();
  db = this.app.firestore();
  categories: firebase.firestore.DocumentData = null;

  getBets = async () => await this.db.collection('bets').get();

  getBetsCategories = async () => {
    return await this.db
      .collection('categories')
      .get();
  };
}
const betService = new Bet();

export default betService;
