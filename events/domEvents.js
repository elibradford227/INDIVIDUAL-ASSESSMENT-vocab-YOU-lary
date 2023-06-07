import {
  getEntries, deleteEntry, getSingleEntry, getPythonEntries, getJSEntries, getPHPEntries, getCEntries
} from '../api/entryData';
import addEntry from '../forms/addEntry';
import { cardsOnDom } from '../pages/entries';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then(cardsOnDom);
        });
      }
    }
    if (e.target.id.includes('edit-entry-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleEntry(firebaseKey).then((entryObj) => addEntry(entryObj));
    }

    if (e.target.id === 'clear') {
      getEntries(user.uid).then(cardsOnDom);
    }

    if (e.target.id === 'python') {
      getPythonEntries(user.uid).then(cardsOnDom);
    }

    if (e.target.id === 'javascript') {
      getJSEntries(user.uid).then(cardsOnDom);
    }

    if (e.target.id === 'PHP') {
      getPHPEntries(user.uid).then(cardsOnDom);
    }

    if (e.target.id === 'c') {
      getCEntries(user.uid).then(cardsOnDom);
    }
  });
};

export default domEvents;
