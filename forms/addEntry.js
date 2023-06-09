import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const addEntry = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
    <div class="form-group">
      <label for="image">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Enter a word or phrase" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="text">Definition</label>
      <input type="text" class="form-control" id="definition" placeholder="Enter a definition" value="${obj.definition || ''}" required>
    </div>
    <select class="form-select" id="language" aria-label="Choose a language" required>
      <option value="">Please select</option>
      <option value="python">python</option>
      <option value="PHP">PHP</option>
      <option value="javascript">javascript</option>
      <option value="c#">c#</option>
    </select>
    <button type="submit" class="btn btn-primary mt-3">Submit Vocab Card</button>
  </form>`;

  renderToDOM('#main', domString);
};

export default addEntry;
