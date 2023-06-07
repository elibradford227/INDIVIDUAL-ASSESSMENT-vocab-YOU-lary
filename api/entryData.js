import client from '../utils/client';

const endpoint = client.databaseURL;

const getEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
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

const createEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getPythonEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lang = Object.values(data).filter((item) => item.language === 'python');
      resolve(lang);
    })
    .catch(reject);
});

const getJSEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lang = Object.values(data).filter((item) => item.language === 'javascript');
      resolve(lang);
    })
    .catch(reject);
});

const getPHPEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lang = Object.values(data).filter((item) => item.language === 'PHP');
      resolve(lang);
    })
    .catch(reject);
});

const getCEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lang = Object.values(data).filter((item) => item.language === 'c#');
      resolve(lang);
    })
    .catch(reject);
});

export {
  getEntries, createEntry, updateEntry, deleteEntry, getSingleEntry, getPythonEntries, getJSEntries, getPHPEntries, getCEntries
};
