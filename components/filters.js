import renderToDOM from '../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class="d-flex flex-wrap justify-content-center my-3">
    <button class="btn btn-secondary btn-lg buttonRow" id="python">python</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="javascript">Javascript</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="PHP">PHP</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="c"> C#</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="clear">Clear Filter</button>
  </div>
  <div>
    <select class="form-select" aria-label="Default select example" id="sort">
    <option selected>Sort by</option>
      <option value="Alphabetically">Alpabetically</option>
    </select>
  </div>
  `;
  renderToDOM('#filters--', domString);
};

export default filterButtons;
