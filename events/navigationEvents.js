import { getEntries } from '../api/entryData';
import filterButtons from '../components/filters';
import addEntry from '../forms/addEntry';
import { cardsOnDom } from '../pages/entries';

const navigationEvents = () => {
  document.querySelector('#create-entry--').addEventListener('click', () => {
    console.warn('clicked!');
    addEntry({});
  });

  document.querySelector('#logo').addEventListener('click', () => {
    filterButtons();
    getEntries().then((entries) => cardsOnDom(entries));
  });
};

export default navigationEvents;
