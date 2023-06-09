import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import { getEntries } from '../api/entryData';
import { cardsOnDom } from '../pages/entries';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import filterButtons from '../components/filters';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  navigationEvents(user);
  logoutButton();
  formEvents(user);
  domEvents(user);
  filterButtons(user);
  getEntries(user.uid).then((entries) => cardsOnDom(entries));
};

export default startApp;
