import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filters"></div>
  <div id="main-container">
    <div id="main" class="row row-cols-2 row-cols-md-5 g-4">HELLO</div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
