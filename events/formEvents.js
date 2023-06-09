import { createEntry, getEntries, updateEntry } from '../api/entryData';
import { cardsOnDom } from '../pages/entries';
import filterButtons from '../components/filters';

const formEvents = (user) => {
  document.querySelector('#main').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
      };

      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
          getEntries(user.uid).then(cardsOnDom);
          filterButtons();
        });
      });
    }

    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };

      updateEntry(payload).then(() => {
        getEntries(user.uid).then(cardsOnDom);
        filterButtons();
      });
    }
  });
};

export default formEvents;
