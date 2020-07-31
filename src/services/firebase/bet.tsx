import firebase from 'gatsby-plugin-firebase';
import _map from 'lodash/map';

class Bet {
  app = firebase.app();
  db = this.app.firestore();

  getBets = async () => await this.db.collection('bets').get();
}
const betService = new Bet();

export default betService;
