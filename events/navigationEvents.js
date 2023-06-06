import addEntry from '../forms/addEntry';

const navigationEvents = () => {
  document.querySelector('#create-entry--').addEventListener('click', () => {
    console.warn('clicked!');
    addEntry({});
  });
};

export default navigationEvents;
