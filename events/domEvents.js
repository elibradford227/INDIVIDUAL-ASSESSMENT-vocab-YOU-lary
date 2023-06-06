import { getEntries, deleteEntry, getSingleEntry } from '../api/entryData';
import addEntry from '../forms/addEntry';
import { cardsOnDom } from '../pages/entries';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteEntry(firebaseKey).then(() => {
          getEntries().then(cardsOnDom);
        });
      }
    }
    if (e.target.id.includes('edit-entry-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleEntry(firebaseKey).then((entryObj) => addEntry(entryObj));
    }
  });
};

export default domEvents;
