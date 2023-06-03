import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import getEntries from '../api/entryData';
import { cardsOnDom } from '../pages/entries';

const startApp = () => {
  domBuilder();
  navBar();
  // cardsOnDom([1, 2, 3, 4]);
  logoutButton();
  getEntries().then((entries) => cardsOnDom(entries));
};

export default startApp;
