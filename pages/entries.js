import renderToDOM from '../utils/renderToDom';

const noEntries = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#app', domString);
};

const cardsOnDom = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="col">
        <div class="card text-bg-dark mb-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
              <p class="card-text bold">${item.language}</p>
              <p class="card-text bold">${item.definition}</p>
              <i id="edit-entry-btn--${item.firebaseKey}" class="cardbtn">Edit</i>
              <i id="delete-entry-btn--${item.firebaseKey}" class="cardbtn">Delete</i>
              <hr>
          </div>
        </div>
      </div>`;
  });
  renderToDOM('#main', domString);
};

export { noEntries, cardsOnDom };
