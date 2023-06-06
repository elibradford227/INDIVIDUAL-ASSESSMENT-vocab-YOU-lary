import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const noEntries = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#app', domString);
};

const cardsOnDom = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
              <p class="card-text bold">${item.language}</p>
              <p class="card-text bold">${item.definition}</p>
              <i id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
              <hr>
          </div>
        </div>`;
  });
  renderToDOM('#main', domString);
};

export { noEntries, cardsOnDom };
