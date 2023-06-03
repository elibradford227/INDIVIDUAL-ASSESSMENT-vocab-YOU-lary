import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#" id="create-entry--">Create Entry</a>
        </li>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </ul>
    </div>
  </div>
</nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
