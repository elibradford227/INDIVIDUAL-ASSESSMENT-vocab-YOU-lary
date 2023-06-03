import client from '../utils/client';

const endpoint = client.databaseURL;

const getEntries = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getEntries;
