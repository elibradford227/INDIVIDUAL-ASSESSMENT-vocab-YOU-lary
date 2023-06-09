import renderToDOM from '../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class="d-flex flex-wrap justify-content-center my-3">
    <button class="btn btn-secondary btn-lg buttonRow" id="python">python</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="javascript">javascript</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="PHP">php</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="c"> c#</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="clear">clear filter</button>
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
