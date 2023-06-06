import { getEntries, deleteEntry } from '../api/entryData';
import { cardsOnDom } from '../pages/entries';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteEntry(firebaseKey).then(() => {
          getEntries().then(cardsOnDom);
        });
      }
    }
  });
};

export default domEvents;
