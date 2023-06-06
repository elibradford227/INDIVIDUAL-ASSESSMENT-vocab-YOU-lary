import { createEntry, getEntries, updateEntry } from '../api/entryData';
import { cardsOnDom } from '../pages/entries';

const formEvents = () => {
  document.querySelector('#main').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
      };

      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
          getEntries().then(cardsOnDom);
        });
      });
    }
  });
};

export default formEvents;
