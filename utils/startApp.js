import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import { getEntries } from '../api/entryData';
import { cardsOnDom } from '../pages/entries';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  // cardsOnDom([1, 2, 3, 4]);
  logoutButton();
  formEvents();
  domEvents();
  getEntries().then((entries) => cardsOnDom(entries));
};

export default startApp;
